'use client'

import { useEffect, useState, forwardRef, RefObject } from 'react';
import Image from 'next/image';
import Loading from '@/app/(test)/test/loading';

type TCaptureAreaProps = {
  divRef: RefObject<HTMLDivElement>;
};

const CaptureArea = forwardRef<HTMLDivElement, TCaptureAreaProps>(({ divRef }, ref) => {
  const [result, setResult] = useState<{ position: string; response: string } | null>(null);

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
      className="w-full h-[600px] bg-[#FFFFFF] flex flex-col justify-center items-center relative"
    >
      <div className="absolute flex justify-center items-center top-10 w-72 h-9 bg-red-100 rounded-full text-white">
        당신의 ♥천생연분♥ 야구선수는?
      </div>
      <div className="result-container">
        <h1>테스트 결과</h1>
        <h2>포지션: {result.position}</h2>
        <p>{result.response}</p>
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
});

CaptureArea.displayName = "CaptureArea";

export default CaptureArea;