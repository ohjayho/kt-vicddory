"use client";

import Button from '@/components/test/Button';
import CaptureArea from '@/components/test/result/CaptureArea';
import { CaptureDownload } from '@/components/test/result/CaptureDownload';
import ResultPosition from '@/components/test/result/ResultPosition';
import TestShare from '@/components/test/result/TestShare';
import React, { useRef } from 'react';


export default function Page() {
  const divRef = useRef<HTMLDivElement>(null);

  const handleCaptureClick = () => {
    CaptureDownload(divRef);
    alert("테스트 결과를 캡쳐합니다.")
  };

  return (
    <>
      <div className="bg-slate-100">
        <div className="flex justify-center flex-col items-center h-full max-w-md m-auto">
          <CaptureArea divRef={divRef} />
          <div className="w-full h-[1900px] bg-[#F8A6A7] relative flex flex-col justify-center items-center">
            <div className="absolute text-[#333333] font-bold top-10">
              가장 많은 포지션은 뭘까요?
            </div>
            <ResultPosition
              src="/svgs/test/result/catcher.svg"
              alt="catcher"
              width={238}
              left={40}
              text="타자의 심리를 읽는 포수"
              description="언제나 최전선, 배터리의 심장"
              tags="#어깨깡패#블로킹#지휘자"
              ranking={1}
              ratio={40.8}
            />
            <ResultPosition
              src="/svgs/test/result/outfielder.svg"
              alt="outfielder"
              width={290}
              left={30}
              text="빠른 발로 공을 쫓는 외야수"
              description="넓은 들판의 사냥꾼"
              tags="#정확성#판단력#파워어깨"
              ranking={2}
              ratio={25.4}
            />
            <ResultPosition
              src="/svgs/test/result/pitcher.svg"
              alt="pitcher"
              width={360}
              left={-43}
              text="강속구를 던지는 투수"
              description="경기의 지휘자, 마운드의 왕"
              tags="#끈기#제구력#침착"
              ranking={3}
              ratio={18.2}
            />
            <ResultPosition
              src="/svgs/test/result/infielder.svg"
              alt="infielder"
              width={243}
              left={30}
              text="민첩한 동작의 내야수"
              description="순간의 반응, 내야의 수호자"
              tags="#안정적#더블플레이#중심"
              ranking={4}
              ratio={15.6}
            />
          </div>
          <div className="w-full h-[250px] bg-[#FFFFFF] flex flex-col justify-center items-center">
            <Button href="/test/questions/1">테스트 다시하기</Button>
            <div className="text-xl font-bold mt-10 mb-3">
              <span className="text-red-100">테스트</span>
              <span className="text-[#333333]">공유하기</span>
            </div>
            <TestShare onClick={handleCaptureClick}/>
          </div>
        </div>
      </div>
    </>
  );
}