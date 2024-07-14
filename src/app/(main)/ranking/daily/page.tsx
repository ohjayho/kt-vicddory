import Calendar from '@/components/ranking/Calendar/Calendar';
import dynamic from 'next/dynamic';

export default function RankingDaily() {
  const Chart = dynamic(() => import('@/components/ranking/Chart'), {
    ssr: false,
  });

  return (
    <>
      <div className="w-3/4 mx-auto text-white pb-16">
        <div className="h-8 mt-[51px] text-lg border-l-4 border-red-100 flex items-center">
          <p className="ml-3.5">비교 분석 구간:</p>
          <Calendar />
        </div>
        <p className="my-4 ml-4 text-sm">* 기간 검색은 30일 이내</p>
        <Chart title="일자별 순위 그래프" />
      </div>
    </>
  );
}
