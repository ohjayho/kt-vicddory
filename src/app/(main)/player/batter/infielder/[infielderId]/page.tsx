import React from 'react';
import path from 'path';
import fs from 'fs';
import PlayerDetailClient from '@/components/player/PlayerDetail';
import {
  IPlayerFront,
  IPlayerBack,
  IBatterPlayerData,
  TBatterYearRecord,
  TInfielderMetric,
} from '@/types';
import { getDefaultMetric } from '@/utils/getDefaultMetric';

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
): Promise<IBatterPlayerData | null> {
  const infielderDataPath = path.join(
    process.cwd(),
    'public/data/playerFront',
    'infielder_data.json',
  );
  const infielderData = JSON.parse(fs.readFileSync(infielderDataPath, 'utf8'));
  const playerMeta = infielderData.data.list.find(
    (player: IPlayerFront) => player.backNum === backNum,
  );

  if (!playerMeta) {
    return null;
  }

  const filePath = path.join(
    process.cwd(),
    'public/data',
    'playerDetail/batter/infielder',
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
export default async function InfielderDetail({ params }: InfielderPageProps) {
  const player = await getPlayerData(params.infielderId);
  if (!player) {
    return <div>Player not found</div>;
  }
  const playerProfile: IPlayerBack = player.data.gameplayer;
  if (player.data.metric2023 === undefined || player.data.metric2023 === null) {
    player.data.metric2023 = getDefaultMetric('infielder') as TInfielderMetric;
  }
  const currentMetric: TInfielderMetric = player.data
    .metric2023 as TInfielderMetric;
  const playerYearRecord: TBatterYearRecord[] = player.data.yearrecordlist;

  // 예측 API
  const predictionRes: Response = await fetch(
    `${process.env.API_URL}/predict_player_stats`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        position: 'outfielder',
        player_data: playerYearRecord,
      }),
    },
  );
  if (!predictionRes.ok) {
    console.error('Error-Failed to fetch prediction data');
    return <div>Failed to fetch prediction data</div>;
  }
  const playerMetric: TInfielderMetric = await predictionRes.json();
  return (
    <>
      <PlayerDetailClient
        player={playerProfile}
        currentMetric={currentMetric}
        aiMetric={playerMetric}
        position="infielder"
      />
    </>
  );
}
