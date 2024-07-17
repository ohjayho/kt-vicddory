'use client';

import React from 'react';
import CardFront from '@/components/tradingCard/CardFront';
import outfielder_data from '#/data/playerFront/outfielder_data.json';

const outfielderData = outfielder_data.data.list;

export default function Outfielder() {
  return (
    <>
      <div className="bg-white flex justify-center items-center h-min flex-wrap ">
        <div className="flex flex-wrap flex-row gap-6 p-6 justify-start items-center object-center w-3/4">
          {outfielderData.map((outfielder, index) => (
            <CardFront key={index} player={outfielder} size="medium" />
          ))}
        </div>
      </div>
    </>
  );
}
