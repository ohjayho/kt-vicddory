import React from 'react';
import fs from 'fs';
import path from 'path';
import PlayerDetailClient from '@/components/player/PlayerDetail';
import {
  IPlayerFront,
  IPlayerBack,
  TPitcherMetric,
  IPitcherPlayerData,
} from '@/types';
import { getDefaultMetric } from '@/utils/getDefaultMetric';
// import generateStaticParams from '@/utils/generateStaticParams';
interface PitcherPageProps {
  params: { pitcherId: string };
}

export async function generateStaticParams() {
  const filePath = path.join(
    process.cwd(),
    'public/data/playerFront',
    'pitcher_data.json',
  );
  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const paths = jsonData.data.list.map((player: IPlayerFront) => ({
    outfielderId: player.backNum.toString(),
  }));

  return paths;
}
async function getPlayerData(
  backNum: string,
): Promise<IPitcherPlayerData | null> {
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

export default async function PitcherDetail({ params }: PitcherPageProps) {
  const player = await getPlayerData(params.pitcherId);

  if (!player) {
    return <div>Player not found</div>;
  }
  const playerProfile: IPlayerBack = player.data.gameplayer;
  // console.log('playerProps', player);
  return (
    <>
      <PlayerDetailClient
        player={playerProfile}
        position="pitcher"
        playerData={player}
      />
    </>
  );
}
