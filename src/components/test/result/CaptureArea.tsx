'use client';

import Image from 'next/image';
import Loading from '@/app/(test)/test/loading';
import { useEffect, useState, forwardRef } from 'react';
import CardFront from '@/components/tradingCard/CardFront';
import catcherData from '#/data/playerFront/catcher_data.json';
import pitcherData from '#/data/playerFront/pitcher_data.json';
import infielderData from '#/data/playerFront/infielder_data.json';
import outfielderData from '#/data/playerFront/outfielder_data.json';

type TCaptureAreaProps = {
  closeModal?: () => void;
  onPlayerHrefChange?: (href: string) => void;
};

const CaptureArea = forwardRef<HTMLDivElement, TCaptureAreaProps>(
  ({ closeModal, onPlayerHrefChange }, ref) => {
    const [result, setResult] = useState<{
      position: string;
      response: string;
    } | null>(null);
    const [player, setPlayer] = useState<any>(null);

    useEffect(() => {
      const storedResult = sessionStorage.getItem('testResult');
      if (storedResult) {
        const parsedResult = JSON.parse(storedResult);
        setResult(parsedResult);

        const selectRandomPlayer = (position: string) => {
          let playerData: any[];
          switch (position) {
            case '포수':
              playerData = catcherData.data.list;
              break;
            case '내야수':
              playerData = infielderData.data.list;
              break;
            case '외야수':
              playerData = outfielderData.data.list;
              break;
            case '투수':
              playerData = pitcherData.data.list;
              break;
            default:
              playerData = [];
          }

          const randomPlayer =
            playerData[Math.floor(Math.random() * playerData.length)];
          setPlayer(randomPlayer);
          if (onPlayerHrefChange) {
            onPlayerHrefChange(
              `/player/batter/catcher/${randomPlayer.backNum}`,
            );
          }
        };

        selectRandomPlayer(parsedResult.position);
      }
    }, []);

    if (!result) {
      return <Loading />;
    }

    return (
      <div
        id="download"
        ref={ref}
        className="w-full h-[883px] bg-[#FFFFFF] flex flex-col justify-center items-center relative"
      >
        {closeModal ? (
          <button
            onClick={closeModal}
            className="absolute text-2xl right-2 top-0 text-slate-400 hover:text-black"
          >
            x
          </button>
        ) : null}
        <div className="absolute flex justify-center items-center top-10 w-72 h-9 bg-red-100 rounded-full text-white -mt-7 mb-3">
          당신의 ♥천생연분♥ 야구선수는?
        </div>
        <CardFront player={player} size="medium" />
        <div className="flex flex-col justify-center items-center mt-3 mb-24 mx-5">
          <h1 className="text-2xl font-bold mb-3">⚾️{result.position}⚾️</h1>
          <div className="p-2 bg-white border-4 border-blue-200 rounded w-[400px] md:w-[400px] h-60 flex justify-center items-center">
            {result.response}
          </div>
        </div>
        <Image
          src="/svgs/test/result/resultBackground.svg"
          alt="emblem"
          width={500}
          height={120}
          className="absolute bottom-[-1px] w-full"
        />
      </div>
    );
  },
);

CaptureArea.displayName = 'CaptureArea';

export default CaptureArea;
