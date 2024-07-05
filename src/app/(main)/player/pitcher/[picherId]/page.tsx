'use client';

import React, { useState } from 'react';
import CardFront from '@/components/tradingCard/CardFront';
import CardBack from '@/components/tradingCard/CardBack';
import Banner from '@/components/player/Banner';
import PlayerChart from '@/components/player/PlayerChart';
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

const submenus = [
  { children: '코칭스탭', url: '/player/coach' },
  { children: '투수', url: '/player/pitcher' },
  { children: '타자', url: '/player/batter' },
  { children: '응원단', url: '/player/cheerleader' },
];

export default function page() {
  return (
    <>
      <div>
        <Banner
          title="투수"
          subtitle="kt wiz의 자랑스런 ‘첫 번째 선수단’을 소개합니다"
          submenus={submenus}
        />
      </div>

      <div className="flex flex-row justify-center h-screen flex-wrap bg-black/90 py-12">
        <div className="flex flex-col h-auto py-8">
          {pitcherData.map((pitcher, index) => (
            <CardBack key={index} player={pitcher} size="medium" />
          ))}
        </div>
        {/* AI 파트 */}
        <div className="flex flex-col w-1/3 px-6">
          {/*그래프*/}
          <div className="">
            <PlayerChart title={'선수 예측 데이터'} />
          </div>

          {/* 한 줄 예측 */}
          <div className="pl-6">AI 예측</div>
          <div className="rounded-[5px] border-2 border-white h-[60px] mx-6"></div>
        </div>
      </div>
    </>
  );
}
