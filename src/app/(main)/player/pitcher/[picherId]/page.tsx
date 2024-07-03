'use client';

import React, { useState } from 'react';
import CardFront from '@/components/tradingCard/CardFront';
import CardBack from '@/components/tradingCard/CardBack';

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
  return (
    <>
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
