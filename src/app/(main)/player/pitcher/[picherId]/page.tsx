'use client';

import React, { useState } from 'react';
import CardFront from '@/components/tradingCard/CardFront';
import CardBack from '@/components/tradingCard/CardBack';
import Banner from '@/components/player/Banner';

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
          title="선수"
          subtitle="kt wiz의 자랑스런 ‘첫 번째 선수단’을 소개합니다"
          submenus={submenus}
        />
      </div>
      <div className="flex justify-center items-center h-screen flex-wrap ">
        <div className="flex flex-wrap flex-row gap-6 p-6 justify-center items-center object-center w-3/4">
          {pitcherData.map((pitcher, index) => (
            <CardBack key={index} player={pitcher} size="medium" />
          ))}
        </div>
      </div>
    </>
  );
}
