'use client';

import React, { useState } from 'react';
import CardFront from '@/components/tradingCard/CardFront';
import CardBack from '@/components/tradingCard/CardBack';
import Banner from '@/components/player/Banner';
interface Tab {
  id: number;
  label: string;
}
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

const pitcherData2 = [
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

export default function Pitcher() {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs: Tab[] = [
    { id: 0, label: '코칭스탭' },
    { id: 1, label: '투수' },
    { id: 2, label: '타자' },
    { id: 3, label: '응원단' },
  ];
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
