import NewsContent from '@/components/wiznews/NewsContent';
import { TParams } from '../@news/(.)[newsId]/page';

export default function WizNewsDetail({ params }: TParams) {
  const newsId = params.newsId;
  return (
    <>
      <div className="w-full h-[1000px] bg-[url('/images/mainBg.png')] text-white flex justify-center items-center">
        <NewsContent newsId={newsId} />
      </div>
    </>
  );
}
