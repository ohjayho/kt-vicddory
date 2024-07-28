import KakaoShare from './KakaoShare';
import UrlCopy from './UrlCopy';
import React from 'react';
import Image from 'next/image';

type TTestShareProps = {
  onClick: () => void;
};

export default function TestShare({ onClick }: TTestShareProps) {
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-6 mt-3">
        <KakaoShare />
        <button
          onClick={UrlCopy}
          className="flex justify-center items-center border border-black rounded-full w-14 h-14 text-4xl bg-white hover:bg-gray-100 hover:border-0"
        >
          <Image
            src="/svgs/test/result/urlCopy.svg"
            alt="urlCopy"
            width={40}
            height={40}
          />
        </button>
        <button
          onClick={onClick}
          className="flex justify-center items-center border border-black rounded-full w-14 h-14 text-4xl bg-white hover:bg-gray-100 hover:border-0"
        >
          <Image
            src="/svgs/test/result/capture.svg"
            alt="capture"
            width={40}
            height={40}
          />
        </button>
      </div>
    </>
  );
}
