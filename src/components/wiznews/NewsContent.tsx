'use client';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, useEffect, useState } from 'react';
import { useNewsListStore } from './NewsArea';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { TNewsContent } from '@/types';
import Link from 'next/link';

type TNewsId = {
  newsId: string;
};

export default function NewsContent({ newsId }: TNewsId) {
  const [foundNews, setFoundNews] = useState<TNewsContent | undefined>(null);
  const [error, setError] = useState(false);
  const newsList = useNewsListStore((state) => state.newsList);
  const router = useRouter();
  const handleBacklink: MouseEventHandler<HTMLButtonElement> = () => {
    router.back();
  };
  const trimmedArtcContents =
    foundNews && foundNews.artcContents.replace(/<[^>]*>/g, '');

  const newsDate = () => {
    const date = foundNews && new Date(foundNews.regDttm);
    if (date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
      return formattedDate;
    }
  };

  const fetchDetailedNews = async () => {
    const detailedNews = await (
      await fetch(`/api/detailednews?params=${newsId}`)
    ).json();
    return detailedNews;
  };

  const DynamicTTS = dynamic(() => import('./NewsTTS'), {
    loading: () => <div>Loading TTS...</div>,
    ssr: false,
  });

  useEffect(() => {
    if (newsList.length) {
      setFoundNews(
        newsList.find(
          // news is possibly null, so added news &&
          (news) => news && news.artcSeq === parseInt(newsId),
        ),
      );
    } else {
      const getDetailedNews = async () => {
        try {
          setFoundNews(await fetchDetailedNews());
        } catch {
          setError(true);
          throw new Error('Failed to fetch detailed news.');
        }
      };
      getDetailedNews();
    }
  }, []);

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center mt-32">
        <p className="text-xl mb-8 text-white">해당 뉴스를 찾을 수 없습니다.</p>
        <div>
          <Link href="/wiznews" className="text-red-60 hover:cursor-pointer">
            뉴스 홈으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {foundNews && (
        <section className="w-[820px] max-lg:w-[80%] h-[70%] bg-[#0a0a0e] rounded-[5px] p-5 font-['DungGeunMo'] text-white">
          <div className="h-full shadow-[0_0_30px_rgba(237,136,136,0.84)] bg-[url('/images/wiznews/newsPattern.png')] flex flex-col">
            <div className="h-14 bg-[rgba(0,0,0,0.44)] p-8">
              <button
                className="h-full text-[#FFE974] text-xl flex items-center"
                onClick={handleBacklink}
              >
                ← 목록
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full flex max-md:flex-col justify-between pt-8 px-8 pb-5">
                <h1 className="w-[80%] max-md:w-full">{foundNews.artcTitle}</h1>
                <h3 className="flex justify-end max-md:mt-1">{newsDate()}</h3>
              </div>
              <DynamicTTS text={trimmedArtcContents} />
            </div>
            <div className="px-8 pb-8 overflow-scroll no-scrollbar">
              {foundNews.imgFilePath && (
                <div className="relative w-full aspect-[2/1] mt-4">
                  <Image
                    src={foundNews.imgFilePath}
                    layout="fill"
                    objectFit="contain"
                    alt="news_image"
                  />
                </div>
              )}
              <p className="h-full overflow-y-scroll no-scrollbar mt-4">
                {trimmedArtcContents}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
