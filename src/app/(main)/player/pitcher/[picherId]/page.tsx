'use client';

import React from 'react';
import PlayerCard from '@/components/tradingCard/PlayerCard';
import Banner from '@/components/player/Banner';
import dynamic from 'next/dynamic';

const pitcherData = [
  {
    korName: '강현우',
    engName: 'Kang Hyun Woo',
    backNum: 55,
    playerImg: 'kt11.png',
    positionKor: '투수',
    positionEng: 'Pitcher',
    positionPH: '우수우타',
    positionImg: 'pitcher.png',
    playerDOB: '1999.04.14',
    playerHeight: 185,
    playerWeight: 88,
    debutYear: 2018,
  },
];

export default function page() {
  const PlayerChart = dynamic(() => import('@/components/player/PlayerChart'), {
    ssr: false,
  });
  return (
    <>
      <div>
        <Banner title="투수" />
      </div>

      <div className="flex flex-row justify-center h-screen flex-wrap bg-black/90 py-16">
        <div className="flex flex-col h-auto">
          {pitcherData.map((pitcher, index) => (
            <PlayerCard key={index} player={pitcher} size="medium" />
          ))}
        </div>
        {/* AI 파트 */}
        <div className="flex flex-col w-1/3 px-16">
          {/*그래프*/}
          <div className="w-full pl-6">
            <PlayerChart title={'선수 예측 데이터'} />
          </div>

          {/* 한 줄 예측 */}
          <div className="pl-6">AI 예측</div>
          <div className="rounded-[5px] border-2 text-white border-white h-auto w-full mx-6 p-4">
            누가 이겨? 내가 이겨~~ 루끼루끼 마 슈퍼루끼루끼루끼 마치마치 그
            느낌적인 느낌느낌
          </div>
        </div>
      </div>
    </>
  );
}
