import Banner from '@/components/player/Banner';

export default function CoachLayout({
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
            title="코칭스탭"
            subtitle="최고의 kt wiz 코칭스탭을 소개합니다."
          />
        </div>
        {children}
      </div>
    </>
  );
}
