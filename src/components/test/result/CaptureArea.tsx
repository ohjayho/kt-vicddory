import { forwardRef, RefObject } from 'react';
import Image from 'next/image';

type TCaptureAreaProps = {
  divRef: RefObject<HTMLDivElement>;
};

const CaptureArea = forwardRef<HTMLDivElement, TCaptureAreaProps>(
  ({ divRef }) => {
    return (
      <>
        <div
          ref={divRef}
          className="w-full h-[600px] bg-[#FFFFFF] flex flex-col justify-center items-center relative"
        >
          <div className="absolute flex justify-center items-center top-10 w-72 h-9 bg-red-100 rounded-full text-white">
            당신의 ♥천생연분♥ 야구선수는?
          </div>
          <Image
            src="/svgs/test/result/resultBackground.svg"
            alt="emblem"
            width={500}
            height={120}
            className="absolute bottom-[-1px]"
          />
        </div>
      </>
    );
  },
);

export default CaptureArea;