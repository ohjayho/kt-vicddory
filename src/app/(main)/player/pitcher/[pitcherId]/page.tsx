import React from 'react';
import path from 'path';
import fs from 'fs';
import PitcherDetailClient from '@/components/player/PitcherDetail';
import { IPlayerFront, IPlayerBack, TPitcherMetric } from '@/types';
interface PitcherPageProps {
  params: { pitcherId: string };
}

export async function generateStaticParams() {
  const filePath = path.join(
    process.cwd(),
    'public/data/playerFront',
    'pitcher_data.json',
  );
  // console.log(filePath);
  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const paths = jsonData.data.list.map((player: IPlayerFront) => ({
    pitcherId: player.backNum.toString(),
  }));

  return paths;
}

async function getPlayerData(
  backNum: string,
): Promise<{ data: { gameplayer: IPlayerBack } } | null> {
  const pitcherDataPath = path.join(
    process.cwd(),
    'public/data/playerFront',
    'pitcher_data.json',
  );
  console.log(pitcherDataPath);
  const pitcherData = JSON.parse(fs.readFileSync(pitcherDataPath, 'utf8'));
  const playerMeta = pitcherData.data.list.find(
    (player: IPlayerFront) => player.backNum === backNum,
  );
  console.log(`playerMeta:${playerMeta}`);

  if (!playerMeta) {
    return null;
  }

  const filePath = path.join(
    process.cwd(),
    'public/data',
    'playerDetail/pitcher',
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
export default async function PitcherDetail({ params }: PitcherPageProps) {
  const player = await getPlayerData(params.pitcherId);

  // 예측 API
  const playerRes: Response = await fetch(
    `${process.env.BASE_URL}/api/startingPitcher?day_num=${player}`,
  );
  const playerMetric: TPitcherMetric = await playerRes.json();
  const aiPrediction: string[] = playerMetric['reason'];

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
