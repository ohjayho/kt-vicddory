import React from 'react';

import PlayerDetailClient from '@/components/player/PlayerDetail';
import {
  IPlayerFront,
  IPlayerBack,
  TPitcherMetric,
  TPitcherYearRecord,
  IPitcherPlayerData,
} from '@/types';
import { getDefaultMetric } from '@/utils/getDefaultMetric';
import { generateStaticParams } from '@/utils/generateStaticParams';
interface PitcherPageProps {
  params: { pitcherId: string };
}

const path = generateStaticParams('pitcher');

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

export const fetchPlayerData = async (position: string) => {
  const playerData = await (
    await fetch(`/api/playerPredict?position=${position}`, {
      cache: 'force-cache',
      body: JSON.stringify({
        player_data: playerYearRecord,
      }),
    })
  ).json();
  return playerData;
};

export default async function PitcherDetail({ params }: PitcherPageProps) {
  const player = await getPlayerData(params.pitcherId);

  if (!player) {
    return <div>Player not found</div>;
  }
  const playerProfile: IPlayerBack = player.data.gameplayer;
  if (player.data.metric2023 === undefined || player.data.metric2023 === null) {
    player.data.metric2023 = getDefaultMetric('pitcher') as TPitcherMetric;
  }
  const currentMetric: TPitcherMetric = player.data
    .metric2023 as TPitcherMetric;

  const playerYearRecord: TPitcherYearRecord[] = player.data.yearrecordlist;

  const playerMetric: TPitcherMetric = await predictionRes.json();
  return (
    <>
      <PlayerDetailClient
        player={playerProfile}
        currentMetric={currentMetric}
        aiMetric={playerMetric}
        position="pitcher"
      />
    </>
  );
}
