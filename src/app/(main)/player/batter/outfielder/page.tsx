'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import CardFront from '@/components/tradingCard/CardFront';
import outfielder_data from '#/data/playerFront/outfielder_data.json';

const outfielderData = outfielder_data.data.list;

export default function Outfielder() {
  const router = useRouter();
  const handleCardClick = (backNum: string) => {
    router.push(`/player/batter/outfielder/${backNum}`);
  };
  return (
    <>
      <div className="bg-white pt-8 flex justify-center items-center h-min flex-wrap ">
        <div className="flex flex-wrap flex-row gap-6 p-6 justify-center items-center object-center w-3/4">
          {outfielderData.map((outfielder, index) => (
            <CardFront
              key={index}
              player={outfielder}
              size="medium"
              onClick={() => handleCardClick(outfielder.backNum)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
