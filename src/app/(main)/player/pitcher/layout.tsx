import Banner from '@/components/player/Banner';

export default function PitcherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen bg-black w-full">
        {' '}
        <div className="pt-20">
          <Banner />
        </div>
        {children}
      </div>
    </>
  );
}
