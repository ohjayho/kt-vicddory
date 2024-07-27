import path from 'path';
import fs from 'fs';
import { IPlayerFront } from '@/types';

const getPlayerData = (backNum: string, position: string) => {
  const folderPath = position === 'pitcher' ? 'pitcher' : `batter/${position}`;

  const pitcherDataPath = path.join(
    process.cwd(),
    'public/data/playerFront',
    `${position}_data.json`,
  );
  const pitcherData = JSON.parse(fs.readFileSync(pitcherDataPath, 'utf8'));
  const playerMeta = pitcherData.data.list.find(
    (player: IPlayerFront) => player.backNum === backNum,
  );

  const filePath = path.join(
    process.cwd(),
    'public/data',
    `playerDetail/${folderPath}`,
    `${playerMeta.korName}.json`,
  );

  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
};

export default getPlayerData;
