import Banner from '@/components/ranking/Banner';
import dynamic from 'next/dynamic';

export default function RankingYear() {
  const Chart = dynamic(() => import('@/components/ranking/Chart'), {
    ssr: false,
  });

  return (
    <>
      <div className="bg-black">
        <Banner />
        <div className="w-3/4 mx-auto text-white pb-16 mt-8">
          <Chart title="년도별 순위 그래프" />
        </div>
      </div>
    </>
  );
}
