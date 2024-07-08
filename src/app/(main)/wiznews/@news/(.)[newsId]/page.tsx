import NewsContent from '@/components/wiznews/NewsContent';

export default function WizNewsDetail() {
  return (
    <>
      <div className="w-full h-full bg-black bg-opacity-30 z-20 fixed top-0 flex justify-center items-center">
        <NewsContent />
      </div>
    </>
  );
}
