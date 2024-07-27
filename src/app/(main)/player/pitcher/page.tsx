'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import CardFront from '@/components/tradingCard/CardFront';
import pitcher_data from '#/data/playerFront/pitcher_data.json';

const pitcherData = pitcher_data.data.list;

export default function PitcherMain() {
  const router = useRouter();
  const handleCardClick = (backNum: string) => {
    router.push(`/player/pitcher/${backNum}`);
  };
  return (
    <>
      <div className="bg-white flex justify-center items-center h-min flex-wrap ">
        <div className="flex flex-wrap flex-row gap-6 p-6 justify-center items-center object-center w-3/4">
          {pitcherData.map((pitcher, index) => (
            <CardFront
              key={index}
              player={pitcher}
              size="medium"
              onClick={() => handleCardClick(pitcher.backNum)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
