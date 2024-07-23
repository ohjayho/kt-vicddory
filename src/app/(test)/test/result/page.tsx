'use client';

import Button from '@/components/test/Button';
import CaptureArea from '@/components/test/result/CaptureArea';
import { CaptureDownload } from '@/components/test/result/CaptureDownload';
import ResultPosition from '@/components/test/result/ResultPosition';
import TestShare from '@/components/test/result/TestShare';
import React, { useEffect, useRef, useState } from 'react';
import positionDetails from '@/data/positionDetails';
import { TPositionStatisticProps } from '@/types';

export default function Page() {
  const divRef = useRef<HTMLDivElement>(null);
  const [statistics, setStatistics] = useState<TPositionStatisticProps[]>([]);

  const handleCaptureClick = () => {
    CaptureDownload(divRef);
    alert("테스트 결과를 캡쳐합니다.");
  };

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await fetch('/api/positionStatistics');
        if (response.ok) {
          const data: TPositionStatisticProps[] = await response.json();
          setStatistics(data);
        } else {
          console.error('Failed to fetch position statistics');
        }
      } catch (error) {
        console.error('Failed to fetch position statistics', error);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <>
      <div className="bg-slate-100">
        <div className="flex justify-center flex-col items-center h-full max-w-md m-auto">
          <CaptureArea divRef={divRef} />
          <div className="w-full h-[1900px] bg-[#F8A6A7] relative flex flex-col justify-center items-center">
            <div className="absolute text-[#333333] font-bold top-10">
              가장 많은 포지션은 뭘까요?
            </div>
            {statistics.map((stat, index) => {
              const details = positionDetails[stat.position];
              return (
                <ResultPosition
                  key={index}
                  {...details}
                  ranking={index + 1}
                  ratio={parseFloat(stat.percentage)}
                />
              );
            })}
          </div>
          <div className="w-full h-[250px] bg-[#FFFFFF] flex flex-col justify-center items-center">
            <Button width={80} text='2xl' href="/test/questions/1">테스트 다시하기</Button>
            <div className="text-xl font-bold mt-10 mb-3">
              <span className="text-red-100">테스트</span>
              <span className="text-[#333333]">공유하기</span>
            </div>
            <TestShare onClick={handleCaptureClick} />
          </div>
          <div className='sticky bottom-0 w-full h-20 bg-[#FFFFFF] flex justify-center items-center pb-6'>
            <Button width={80} text='2xl' href="/test">👉🏻선수 알아보러 가기👈🏻</Button>
          </div>
        </div>
      </div>
    </>
  );
}