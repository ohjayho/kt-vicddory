import path from 'path';
import fs from 'fs';
import { IBatterPlayerData, IPitcherPlayerData, IPlayerFront } from '@/types';
async function getPlayerData(
  backNum: string,
): Promise<IPitcherPlayerData | IBatterPlayerData | null> {
  const pitcherDataPath = path.join(
    process.cwd(),
    'public/data/playerFront',
    'pitcher_data.json',
  );
  const pitcherData = JSON.parse(fs.readFileSync(pitcherDataPath, 'utf8'));
  const playerMeta = pitcherData.data.list.find(
    (player: IPlayerFront) => player.backNum === backNum,
  );

  if (!playerMeta) {
    return null;
  }

  const filePath = path.join(
    process.cwd(),
    'public/data',
    'playerDetail/pitcher',
    `${playerMeta.korName}.json`,
  );

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Cannot read player data: ${playerMeta.korName}.json`);
    return null;
  }
}
