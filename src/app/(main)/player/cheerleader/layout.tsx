import Banner from '@/components/player/Banner';

export default function BatterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen bg-black">
        {' '}
        <div className="pt-20">
          <Banner title="응원" subtitle="kt wiz꽃! kt wiz의 응원단" />
        </div>
        {children}
      </div>
    </>
  );
}
