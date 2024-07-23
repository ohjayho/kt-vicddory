import Banner from '@/components/player/Banner';

export default function OutfielderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen bg-black">
        {' '}
        <div className="pt-20 pb-6">
          <Banner />
        </div>
        {children}
      </div>
    </>
  );
}
