'use client';

import { useEffect, useState, forwardRef, RefObject } from 'react';
import Image from 'next/image';
import Loading from '@/app/(test)/test/loading';

type TCaptureAreaProps = {
  divRef: RefObject<HTMLDivElement>;
};

const CaptureArea = forwardRef<HTMLDivElement, TCaptureAreaProps>(
  ({ divRef }) => {
    const [result, setResult] = useState<{
      position: string;
      response: string;
    } | null>(null);

    useEffect(() => {
      const storedResult = sessionStorage.getItem('testResult');
      if (storedResult) {
        const parsedResult = JSON.parse(storedResult);
        setResult(parsedResult);
      }
    }, []);

    if (!result) {
      return <Loading />;
    }

    return (
      <div
        ref={divRef}
        className="w-full h-[865px] bg-[#FFFFFF] flex flex-col justify-center items-center relative"
      >
        <div className="absolute flex justify-center items-center top-10 w-72 h-9 bg-red-100 rounded-full text-white -mt-7 mb-3">
          당신의 ♥천생연분♥ 야구선수는?
        </div>
        <Image
          src="/images/player/playerCardFront/kt11.png"
          alt="sample"
          width={252}
          height={348}
        />
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
