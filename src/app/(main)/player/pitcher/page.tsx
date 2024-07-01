'use client';

import React, { useState } from 'react';
import CardFront from '@/components/tradingCard/CardFront';
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
  {
    korName: '김 민',
    engName: 'Kim Min',
    backNum: 11,
    playerImg: 'kt11.png',
  },
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
      <div className="bg-black h-1/6 text-white p-4">
        <div>
          <div className="text-2xl font-extrabold">투수</div>
          <div className="text-lg">
            kt wiz의 자랑스런 '첫 번째 선수단'을 소개합니다
          </div>
        </div>
        <div className="flex justify-around">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-2 px-4 relative ${
                selectedTab === tab.id
                  ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-white'
                  : ''
              } hover:after:content-[""] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-1 hover:after:bg-white`}
              onClick={() => setSelectedTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-4 gap-6 p-6">
          {pitcherData.map((pitcher, index) => (
            <CardFront key={index} player={pitcher} size="medium" />
          ))}
        </div>
      </div>
    </>
  );
}
