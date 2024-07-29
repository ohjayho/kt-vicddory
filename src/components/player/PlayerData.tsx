'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { IBatterPlayerData, IPitcherPlayerData, IPlayerBack } from '@/types';

interface PlayerData {
  player: IPitcherPlayerData | IBatterPlayerData | null;
}

export default function PlayerData({ player }: PlayerData) {
  const [detailButton, setDetailButton] = useState(false);
  const onDetailHandler = () => {
    setDetailButton(!detailButton);
  };
  const playerRecentRecord = player?.data.recentgamerecordlist;
  const playerRecentFuturesRecord = player?.data.recentgamerecordlistfutures;
  const playerSeason = player?.data.seasonsummary;
  const playerSeasonFutures = player?.data.seasonsummaryfutures;
  const playerYearRecord = player?.data.yearrecordlist;
  return (
    <>
      <div className="flex text-white justify-center align-middle">
        <button
          className="h-8 w-fit mx-2 flex flex-row"
          onClick={onDetailHandler}
        >
          {/* <MdOutlineArrowRight
            className={`w-8 h-8 ${detailButton ? 'rotate-90' : 'rotate-0'}`}
          /> */}
          <Image
            src={'/svgs/arrow-right.svg'}
            alt="> "
            className={`${detailButton ? 'rotate-90' : 'rotate-0'}`}
          />
          <div className="text-lg">선수 기록 상세보기</div>
        </button>
        {detailButton && <div></div>}
      </div>
    </>
  );
}
