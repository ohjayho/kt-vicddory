import Banner from '@/components/player/Banner';

export default function PitcherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen bg-black">
        {' '}
        <div className="pt-20">
          <Banner
            title="투수"
            subtitle="kt wiz의 자랑스런 ‘첫 번째 선수단’을 소개합니다"
          />
        </div>
        {children}
      </div>
    </>
  );
}
