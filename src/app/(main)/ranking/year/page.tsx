import dynamic from 'next/dynamic';

export default function RankingYear() {
  const Chart = dynamic(() => import('@/components/ranking/Chart'), {
    ssr: false,
  });

  return (
    <>
      <div className="w-3/4 mx-auto text-white pb-16 mt-8 no-scrollbar">
        <div className="overflow-x-auto">
          <Chart title="년도별 순위 그래프" page="year" />
        </div>
      </div>
    </>
  );
}
