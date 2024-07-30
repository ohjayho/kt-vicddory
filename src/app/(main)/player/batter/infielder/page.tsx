'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import CardFront from '@/components/tradingCard/CardFront';
import infielder_data from '#/data/playerFront/infielder_data.json';

const infielderData = infielder_data.data.list;

export default function Infielder() {
  const router = useRouter();
  const handleCardClick = (backNum: string) => {
    router.push(`/player/batter/infielder/${backNum}`);
  };
  return (
    <>
      <div className="bg-white pt-8 flex justify-center items-center h-min flex-wrap ">
        <div className="flex flex-wrap flex-row justify-center md:justify-start p-6 w-3/4 mx-auto">
          {infielderData.map((infielder, index) => (
            <div key={index} className="flex-1 md:flex-none md:w-1/4 p-2">
              <CardFront
                key={index}
                player={infielder}
                size="medium"
                onClick={() => handleCardClick(infielder.backNum)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
