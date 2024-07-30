'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import CardFront from '@/components/tradingCard/CardFront';
import catcher_data from '#/data/playerFront/catcher_data.json';

const catcherData = catcher_data.data.list;

export default function Catcher() {
  const router = useRouter();
  const handleCardClick = (backNum: string) => {
    router.push(`/player/batter/catcher/${backNum}`);
  };
  return (
    <>
      <div className="bg-white pt-8 flex justify-center items-center h-min flex-wrap ">
        <div className="flex flex-wrap flex-row gap-6 p-6 justify-start items-center object-center w-3/4">
          {catcherData.map((catcher, index) => (
            <div key={index} className="flex-1 max-md:w-1/4 max-sm:w-auto p-2">
              <CardFront
                key={index}
                player={catcher}
                size="medium"
                onClick={() => handleCardClick(catcher.backNum)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
