import Banner from '@/components/ranking/Banner';

export default function RankingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen bg-black">
        <Banner />
        {children}
      </div>
    </>
  );
}
