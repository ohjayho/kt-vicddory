import React from 'react';
import path from 'path';
import fs from 'fs';
import PitcherDetailClient from '@/components/player/PitcherDetail';
import { IPlayerFront, IPlayerBack } from '@/types';
interface InfielderPageProps {
  params: { infielderId: string };
}

export async function generateStaticParams() {
  const filePath = path.join(
    process.cwd(),
    'public/data/playerFront',
    'infielder_data.json',
  );
  // console.log(filePath);
  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const paths = jsonData.data.list.map((player: IPlayerFront) => ({
    infielderId: player.backNum.toString(),
  }));

  return paths;
}

async function getPlayerData(
  backNum: string,
): Promise<{ data: { gameplayer: IPlayerBack } } | null> {
  const infielderDataPath = path.join(
    process.cwd(),
    'public/data/playerFront',
    'infielder_data.json',
  );
  console.log(infielderDataPath);
  const infielderData = JSON.parse(fs.readFileSync(infielderDataPath, 'utf8'));
  const playerMeta = infielderData.data.list.find(
    (player: IPlayerFront) => player.backNum === backNum,
  );
  console.log(`playerMeta:${playerMeta}`);

  if (!playerMeta) {
    return null;
  }

  const filePath = path.join(
    process.cwd(),
    'public/data',
    'playerDetail/batter/infielder',
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
export default async function InfielderDetail({ params }: InfielderPageProps) {
  const player = await getPlayerData(params.infielderId);
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
