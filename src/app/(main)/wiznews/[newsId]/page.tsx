import NewsContent from '@/components/wiznews/NewsContent';
import { TParams } from '../@news/(.)[newsId]/page';
import Mascot from '@/components/wiznews/Mascot';

export default function WizNewsDetail({ params }: TParams) {
  const newsId = params.newsId;
  return (
    <>
      <div className="w-full h-[700px] flex justify-center bg-[url('/images/mainBg.png')] bg-cover relative overflow-hidden">
        <Mascot src="/svgs/wiznews/newsMascot/ddory.svg" location="left" />
        <Mascot src="/svgs/wiznews/newsMascot/vic.svg" location="right" />
        <section className="w-3/4 flex flex-col items-center z-10">
          <div className="mt-20 flex justify-center">
            <NewsContent newsId={newsId} />
          </div>
        </section>
      </div>
    </>
  );
}
