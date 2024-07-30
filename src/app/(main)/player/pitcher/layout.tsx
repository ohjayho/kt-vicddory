import Banner from '@/components/player/Banner';

export const metadata = {
  title: '투수',
  description:
    'kt wiz에서 인터랙티브한 선수 카드와 상세 페이지를 확인하세요. 현재 선수의 경기력과 AI가 예측한 미래 성과를 멋진 애니메이션과 함께 제공합니다.',
};

export default function PitcherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen bg-black w-full">
        <div className="pt-20 max-lg:pt-[13vw]">
          <Banner />
        </div>
        {children}
      </div>
    </>
  );
}
