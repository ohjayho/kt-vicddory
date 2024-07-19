'use client';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, useEffect } from 'react';
import { TNewsContent, useNewsListStore } from './NewsSearch';
import Image from 'next/image';
import { create } from 'zustand';

type TNewsId = {
  newsId: string;
};

type TheNewsStore = {
  theNews: TNewsContent;
  setTheNews: (theNews: TNewsContent) => void;
};

export const useTheNewsStore = create<TheNewsStore>()((set) => ({
  theNews: { artcTitle: '', artcContents: '', imgFilePath: '', artcSeq: 0 },
  setTheNews: (theNews) => set(() => ({ theNews: theNews })),
}));

export default function NewsContent({ newsId }: TNewsId) {
  const theNews = useTheNewsStore((state) => state.theNews);
  const setTheNews = useTheNewsStore((state) => state.setTheNews);
  const newsList = useNewsListStore((state) => state.newsList);
  const setNewsList = useNewsListStore((state) => state.setNewsList);
  const fetchNews = async () => {
    //NewsSearch에서 caching 된 경우 재호출되지 않음.
    //하지만 뉴스의 URL을 공유했을 경우 Zustand의 store에 뉴스 정보가 없기 때문에 fetch해야함.
    const newsData = await (await fetch(`/api/news`)).json();
    setNewsList(newsData);
  };

  const router = useRouter();
  const handleBacklink: MouseEventHandler<HTMLButtonElement> = () => {
    router.back();
  };

  useEffect(() => {
    if (newsList.length === 0) {
      ///뉴스가 없다면
      fetchNews();
    }
  }, []);

  useEffect(() => {
    const theNews = newsList.find((news) => news.artcSeq === parseInt(newsId));

    if (theNews) {
      //undefiend 일 수도 있으니 타입 체크. 타입오류 해결 용도
      setTheNews(theNews);
    }
    console.log(theNews, '더뉴스');
  }, [newsId, newsList]);

  return (
    <>
      <section className="w-[820px] max-lg:w-[80%] h-[55%] bg-[#0a0a0e] rounded-[5px] p-5 font-['DungGeunMo'] text-white">
        <div className="h-full shadow-[0_0_30px_rgba(237,136,136,0.84)] bg-[url('/images/wiznews/newsPattern.png')] flex flex-col 내부컨테이너">
          <div className="h-14 bg-[rgba(0,0,0,0.44)] p-8 버튼 칸">
            <button
              className="h-full text-[#FFE974] text-xl flex items-center"
              onClick={handleBacklink}
            >
              ← 목록
            </button>
          </div>
          <div className="flex max-md:flex-col justify-between pt-8 px-8 pb-5 제목 칸">
            <h1 className="w-[80%] max-md:w-full 제목">{theNews.artcTitle}</h1>
            <h3 className="flex justify-end max-md:mt-4 날짜">2024-01-17</h3>
          </div>
          <div className="px-8 pb-8 overflow-scroll no-scrollbar 본문 칸">
            <Image
              src={theNews.imgFilePath}
              width={500}
              height={0}
              alt="news_image"
              className="w-full"
            />
            <p className="h-full overflow-y-scroll no-scrollbar">
              {theNews.artcContents}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
