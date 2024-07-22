import React from 'react';
import path from 'path';
import fs from 'fs';
import PitcherDetailClient from '@/components/player/PitcherDetail';
import { IPlayerFront, IPlayerBack } from '@/types';
interface CatcherPageProps {
  params: { catcherId: string };
}

export async function generateStaticParams() {
  const filePath = path.join(
    process.cwd(),
    'public/data/playerFront',
    'catcher_data.json',
  );
  // console.log(filePath);
  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const paths = jsonData.data.list.map((player: IPlayerFront) => ({
    catcherId: player.backNum.toString(),
  }));

  return paths;
}

async function getPlayerData(
  backNum: string,
): Promise<{ data: { gameplayer: IPlayerBack } } | null> {
  const catcherDataPath = path.join(
    process.cwd(),
    'public/data/playerFront',
    'catcher_data.json',
  );
  console.log(catcherDataPath);
  const catcherData = JSON.parse(fs.readFileSync(catcherDataPath, 'utf8'));
  const playerMeta = catcherData.data.list.find(
    (player: IPlayerFront) => player.backNum === backNum,
  );
  console.log(`playerMeta:${playerMeta}`);

  if (!playerMeta) {
    return null;
  }

  const filePath = path.join(
    process.cwd(),
    'public/data',
    'playerDetail/batter/catcher',
    `${playerMeta.korName}.json`,
  );
  console.log(`filePath: ${filePath}`);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Cannot read player data: ${playerMeta.korName}.json`);
    return null;
  }
}
export default async function CatcherDetail({ params }: CatcherPageProps) {
  const player = await getPlayerData(params.catcherId);
  if (!player) {
    return <div>Player not found</div>;
  }
  const playerProfile: IPlayerBack = player.data.gameplayer;

  return (
    <>
      <PitcherDetailClient player={playerProfile} />
    </>
  );
}
