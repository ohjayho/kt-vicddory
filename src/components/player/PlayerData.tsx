'use client';

'use client';
import React, { useState } from 'react';

import { IPlayerBack } from '@/types';
import { MdOutlineArrowRight } from 'react-icons/md';

interface PlayerData {
  player: IPlayerBack | null;
}

export default function PlayerData({ player }: PlayerData) {
  const [detailButton, setDetailButton] = useState(false);
  const onDetailHandler = () => {
    setDetailButton(!detailButton);
  };
  const playerBackNum = player?.backNum;
  return (
    <>
      <div className="flex text-white justify-center align-middle">
        <button
          className="h-8 w-fit mx-2 flex flex-row"
          onClick={onDetailHandler}
        >
          <MdOutlineArrowRight
            className={`w-8 h-8 ${detailButton ? 'rotate-90' : 'rotate-0'}`}
          />
          <div className="text-lg">선수 기록 상세보기</div>
          <div className="">{playerBackNum}</div>
        </button>
      </div>
    </>
  );
}
