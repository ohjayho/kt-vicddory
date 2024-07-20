'use client';

import { create } from 'zustand';
import NewsBalloon from './NewsBalloon';
import { useEffect } from 'react';

export type TNewsContent = {
  artcContents: string;
  artcTitle: string;
  artcSeq: Number;
  imgFilePath: string;
  [key: string]: any;
} | null;

export type TNewsList = TNewsContent[];

type NewsListStore = {
  newsList: TNewsList;
  setNewsList: (news: TNewsList) => void;
};

export const useNewsListStore = create<NewsListStore>()((set) => ({
  newsList: [],
  setNewsList: (news) =>
    set((state) => ({ newsList: [...state.newsList, ...news] })),
}));

export default function NewsArea() {
  const newsList = useNewsListStore((state) => state.newsList);
  const setNewsList = useNewsListStore((state) => state.setNewsList);
  useEffect(() => {
    const fetchNews = async () => {
      const newsData = await (
        await fetch(`/api/news`, { cache: 'force-cache' })
      ).json();
      setNewsList(newsData);
    };
    fetchNews();
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
                />
              ),
          )}
      </div>
    </>
  );
}
