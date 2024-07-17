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
          <Banner title="투수" />
        </div>
        {children}
      </div>
    </>
  );
}
