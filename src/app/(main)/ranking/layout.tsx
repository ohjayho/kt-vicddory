import Banner from '@/components/ranking/Banner';

export const metadata = {
  title: 'Ranking',
  description:
    '경기 승률 예측 AI와 일자별, 연도별 구단 순위 그래프! kt wiz 웹사이트에서 오늘 경기의 승률을 예측하고, 팀의 역사를 한눈에 볼 수 있는 그래프를 확인해보세요.',
};

export default function RankingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-black">
        <Banner />
        {children}
      </div>
    </>
  );
}
