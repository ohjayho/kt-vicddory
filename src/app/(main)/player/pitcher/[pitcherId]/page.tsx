import React from 'react';
import fs from 'fs';
import path from 'path';
import PlayerDetailClient from '@/components/player/PlayerDetail';
import {
  IPlayerFront,
  IPlayerBack,
  TPlayerMetric,
  IPitcherPlayerData,
  TPitcherYearRecord,
  TBatterYearRecord,
  TPitcherMetric,
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
  // 첫 글자를 소문자로 변환하는 함수
  const toLowerFirst = (str: string): string => {
    return str.charAt(0).toLowerCase() + str.slice(1);
  };

  // playerPosition 변수 선언 및 할당
  const playerPosition: 'pitcher' | 'catcher' | 'infielder' | 'outfielder' =
    toLowerFirst(playerProfile.positionEng) as
      | 'pitcher'
      | 'catcher'
      | 'infielder'
      | 'outfielder';

  // console.log('playerProps', player);
  const currentMetric: TPitcherMetric = player.data
    .metric2023 as TPitcherMetric;

  const fetchPlayerData = async (apiInputData: any): Promise<TPlayerMetric> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/playerPredict`,
        {
          method: 'POST',
          // cache: 'force-cache',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(apiInputData),
        },
      );
      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response text:', errorText);
        throw new Error('Failed to fetch player data');
      }
      const playerExpectedData = await response.json();
      return playerExpectedData;
    } catch (error) {
      console.error('Error fetching player data:', error);
      throw error;
    }
  };
  const getExpectedMetric = async (position: string) => {
    try {
      console.log('Calling fetchPlayerData with position:', position);
      const playerYearRecord: TBatterYearRecord[] | TPitcherYearRecord[] =
        player.data.yearrecordlist;
      const apiInputData = {
        position: playerPosition,
        player_data: playerYearRecord,
      };
      const result = await fetchPlayerData(apiInputData);
      console.log('Received expected data: ', result);
      return result;
    } catch (e) {
      console.log('Error:', e);
      throw e;
    }
  };
  {
    /*
  const apiResult = async () => {
    try {
      const apiresult = getExpectedMetric('pitcher');
      console.log('api result: ', apiresult);
    } catch (error) {
      console.error('Failed to get expected metric: ', error);
    }
  };
*/
  }
  const apiresult = await getExpectedMetric('pitcher');

  console.log('PlayerPage mounted ', apiresult);
  console.log(playerProfile, playerPosition, apiresult, currentMetric);
  return (
    <>
      <div className="text-white text-2xl">Player Page</div>
      <PlayerDetailClient
        player={playerProfile}
        position={playerPosition}
        aiMetric={apiresult}
        currentMetric={currentMetric}
      />
      <div className="text-white">Bottom Page</div>
    </>
  );
}
