'use client';

import { create } from 'zustand';
import NewsBalloon from './NewsBalloon';
import { useEffect } from 'react';
import NewsLoader from './NewsLoader';

export type TNewsContent = {
  artcContents: string;
  artcTitle: string;
  artcSeq: Number;
  imgFilePath?: string;
  [key: string]: any;
} | null;

export type TNewsList = TNewsContent[];

type NewsListStore = {
  newsList: TNewsList;
  setNewsList: (news: TNewsList) => void;
};

export const useNewsListStore = create<NewsListStore>()((set) => ({
  newsList: [],
  setNewsList: (news) => {
    if (news[0] && news[0].imgFilePath === undefined) {
      // news null 체크, imgFilePath가 없으면 === aiNews이면
      set((state) => ({ newsList: [...news, ...state.newsList] }));
    } else {
      set((state) => ({ newsList: [...state.newsList, ...news] }));
    }
  },
}));

export const fetchNews = async (pageNum: number) => {
  const newsData = await (
    await fetch(`/api/news?searchMax=5&pageNum=${pageNum}`, {
      cache: 'force-cache',
    })
  ).json();
  return newsData;
};

export default function NewsArea() {
  const newsList = useNewsListStore((state) => state.newsList);
  const setNewsList = useNewsListStore((state) => state.setNewsList);
  useEffect(() => {
    const getNews = async () => {
      try {
        const result = await fetchNews(1);
        setNewsList(result);
      } catch (e) {
        console.log('Error:', e);
      }
    };
    getNews();
  }, []);
  return (
    <>
      <div className="w-[820px] max-lg:w-[500px] h-[600px] overflow-y-scroll no-scrollbar">
        {newsList.length &&
          newsList.map(
            (news, index) =>
              news && (
                <NewsBalloon
                  key={news.artcTitle}
                  direction={index % 2 === 0 ? 'right' : 'left'}
                  content={news.artcTitle}
                  id={news.artcSeq}
                  ai={news.imgFilePath ? false : true}
                />
              ),
          )}
        <NewsLoader />
      </div>
    </>
  );
}
