import { ReactNode } from 'react';

type TResultPositionRankingContentProps = {
  ranking: ReactNode;
  ratio: ReactNode;
};

export default function ResultPositionRankingContent({
  ranking,
  ratio,
}: TResultPositionRankingContentProps) {
  return (
    <>
      <div className="absolute text-[40px] text-[#333333] font-bold z-1 right-32 top-16">
        {ranking}등
      </div>
      <div className="absolute flex justify-center items-center text-5xl text-[#333333] font-bold z-1 right-[118px] top-36 w-14 h-8">
        {ratio}%
      </div>
    </>
  );
}
