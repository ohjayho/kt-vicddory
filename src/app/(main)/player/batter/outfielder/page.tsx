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
      <div className="bg-white pt-8 flex justify-center items-center h-min flex-wrap no-scrollbar">
        <div className="flex flex-wrap flex-row justify-center md:justify-start p-6 w-3/4 mx-auto">
          {outfielderData.map((outfielder, index) => (
            <div key={index} className="flex-1 max-md:w-1/4 max-sm:w-auto p-2">
              <CardFront
                key={index}
                player={outfielder}
                size="medium"
                onClick={() => handleCardClick(outfielder.backNum)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
