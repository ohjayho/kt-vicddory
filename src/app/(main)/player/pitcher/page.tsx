'use client';

import React from 'react';
import CardFront from '@/components/tradingCard/CardFront';
import Banner from '@/components/player/Banner';

const pitcherData = [
  {
    korName: '김 민',
    engName: 'Kim Min',
    backNum: 11,
    playerImg: 'kt11.png',
  },
  {
    korName: '강현우',
    engName: 'Kang Hyun Woo',
    backNum: 55,
    playerImg: 'kt11.png',
  },
  {
    korName: '강현민',
    engName: 'Kim Min',
    backNum: 15,
    playerImg: 'kt11.png',
  },
  {
    korName: '김 민',
    engName: 'Kim Min',
    backNum: 11,
    playerImg: 'kt11.png',
  },
  {
    korName: '김 민',
    engName: 'Kim Min',
    backNum: 11,
    playerImg: 'kt11.png',
  },
  {
    korName: '김 민',
    engName: 'Kim Min',
    backNum: 11,
    playerImg: 'kt11.png',
  },
  {
    korName: '김 민',
    engName: 'Kim Min',
    backNum: 11,
    playerImg: 'kt11.png',
  },
  {
    korName: '김 민',
    engName: 'Kim Min',
    backNum: 11,
    playerImg: 'kt11.png',
  },
];

export default function Pitcher() {
  return (
    <>
      <div>
        <Banner title="투수" />
      </div>

      <div className="bg-white flex justify-center items-center h-min flex-wrap ">
        <div className="flex flex-wrap flex-row gap-6 p-6 justify-center items-center object-center w-3/4">
          {pitcherData.map((pitcher, index) => (
            <CardFront key={index} player={pitcher} size="medium" />
          ))}
        </div>
      </div>
    </>
  );
}
