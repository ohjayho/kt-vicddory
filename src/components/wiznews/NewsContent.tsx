'use client';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, useEffect, useState } from 'react';
import Image from 'next/image';
import { TNewsContent, useNewsListStore } from './NewsArea';
import dynamic from 'next/dynamic';

type TNewsId = {
  newsId: string;
};

export default function NewsContent({ newsId }: TNewsId) {
  const [newsData, setNewsData] = useState<TNewsContent | undefined>(null);
  const [theNews, setTheNews] = useState<TNewsContent | undefined>(null);
  const newsList = useNewsListStore((state) => state.newsList);
  const router = useRouter();
  const handleBacklink: MouseEventHandler<HTMLButtonElement> = () => {
    router.back();
  };

  const fetchDetailedNews = async () => {
    const detailedNews = await (
      await fetch(`/api/detailednews?params=${newsId}`)
    ).json();
    console.log(detailedNews, '디테일');
    return detailedNews;
  };

  const DynamicTTS = dynamic(() => import('./NewsTTS'), {
    loading: () => <div>Loading TTS...</div>,
    ssr: false,
  });

  useEffect(() => {
    if (newsList.length) {
      setNewsData(
        newsList.find(
          // news is possibly null, so added news &&
          (news) => news && news.artcSeq === parseInt(newsId),
        ),
      );
    } else {
      const getDetailedNews = async () => {
        setNewsData(await fetchDetailedNews());
      };
      getDetailedNews();
    }
  }, [newsId, newsList]);

  useEffect(() => {
    setTheNews(newsData);
  }, [newsData]);

  return (
    <>
      {theNews && (
        <section className="w-[820px] max-lg:w-[80%] h-[63%] bg-[#0a0a0e] rounded-[5px] p-5 font-['DungGeunMo'] text-white">
          <div className="h-full shadow-[0_0_30px_rgba(237,136,136,0.84)] bg-[url('/images/wiznews/newsPattern.png')] flex flex-col 내부컨테이너">
            <div className="h-14 bg-[rgba(0,0,0,0.44)] p-8 버튼 칸">
              <button
                className="h-full text-[#FFE974] text-xl flex items-center"
                onClick={handleBacklink}
              >
                ← 목록
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full flex max-md:flex-col justify-between pt-8 px-8 pb-5 제목 칸">
                <h1 className="w-[80%] max-md:w-full 제목">
                  {theNews.artcTitle}
                </h1>
                <h3 className="flex justify-end max-md:mt-1 날짜">
                  2024-01-17
                </h3>
              </div>
              <DynamicTTS text={theNews.artcContents} />
            </div>
            <div className="px-8 pb-8 overflow-scroll no-scrollbar 본문 칸">
              {theNews.imgFilePath && (
                <Image
                  src={theNews.imgFilePath}
                  width={500}
                  height={0}
                  alt="news_image"
                  className="w-full mt-4"
                />
              )}
              <p className="h-full overflow-y-scroll no-scrollbar mt-4">
                {theNews.artcContents}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
