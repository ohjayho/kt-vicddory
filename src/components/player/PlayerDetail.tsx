'use client';
import React, { useState, useEffect } from 'react';
import PlayerCard from '@/components/tradingCard/PlayerCard';
import dynamic from 'next/dynamic';
// import PlayerData from './PlayerData';

export default function PlayerDetailClient({
  player,
  position,
}: {
  player: any;
  position: any;
}) {
  const [showExpectedSeries, setShowExpectedSeries] = useState(false);
  const [isSpin, setIsSpin] = useState(false);
  const [playerMetric, setPlayerMetric] = useState<any | null>(null);

  const playerProfile = player.data.gameplayer;
  const currentMetric = player.data.metric2023;
  const handleAIButtonClick = async () => {
    const playerYearRecord = JSON.stringify(player.data.yearrecordlist);

    // URL 인코딩 처리
    const encodedYearRecordList = encodeURIComponent(playerYearRecord);

    // 선수 예상 stat api 호출
    const predictionRes = await fetch(
      `/api/predictStats?position=${position}&yearrecordlist=${encodedYearRecordList}`,
    );

    setPlayerMetric(await predictionRes.json());
    setShowExpectedSeries(true);
    setIsSpin(!isSpin);
  };

  useEffect(() => {
    if (isSpin) {
      const timer = setTimeout(() => setIsSpin(true), 1080); // Duration should match your CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isSpin]);

  const PlayerChart = dynamic(() => import('@/components/player/PlayerChart'), {
    ssr: false,
  });

  if (!player) {
    return <div>Player not found</div>;
  }

  return (
    <>
      <div className="flex flex-col items-center bg-black/90 min-h-screen max-md:flex-wrap">
        <div className="flex w-3/4 items-center justify-center max-md:flex-wrap py-16 max-md:w-full">
          <div className="flex h-fit mx-6 items-center justify-self-center my-10 max-md:flex max-md:flex-col max-md:justify-items-center max-md:px-0 max-md:mx-0">
            <PlayerCard
              player={playerProfile}
              size="large"
              checkSpin={isSpin}
            />
          </div>
          {/* AI 파트 */}
          <div className="flex flex-col w-1/2 px-16 pl-22 max-md:pl-0 max-md:w-full max-md:flex-wrap max-md:px-2 max-md:mx-4">
            {/*그래프*/}
            <div className="w-full max-md:px-2 max-md:items-center">
              <PlayerChart
                positionCurrentMetric={currentMetric}
                positionAIMetric={playerMetric}
                position={position}
                showExpectedSeries={showExpectedSeries}
              />
            </div>
            <div className="h-10 flex items-center justify-center max-md:pr-6">
              <button
                className="w-1/2 h-full flex items-center justify-center font-bold text-white text-base bg-red-90 rounded-[30px]"
                onClick={handleAIButtonClick}
              >
                선수 성적 예측하기
              </button>
            </div>
            {/* 한 줄 예측 */}
            <div className="pl-6 mt-3">
              <div className="text-white pl-6 mt-3 ">AI 예측</div>
              <div className="flex items-center rounded-[5px] border-2 text-white border-white h-auto w-5/6 mx-6 p-4 max-md:w-11/12 max-md:flex max-md:justify-center">
                {!playerMetric ? (
                  <div className="text-white">
                    선수 성적 예측하기 버튼을 눌러주세요.
                  </div>
                ) : (
                  <div className="text-white">{playerMetric.reason}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
