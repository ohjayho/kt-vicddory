'use client';

import { create } from 'zustand';
import NewsBalloon from './NewsBalloon';
import { useEffect } from 'react';
import NewsLoader from './NewsLoader';
import { TNewsList } from '@/types';
import Image from 'next/image';

type NewsListStore = {
  newsList: TNewsList;
  setNewsList: (news: TNewsList) => void;
};

export const useNewsListStore = create<NewsListStore>()((set) => ({
  newsList: [],
  setNewsList: (news) => {
    if (news[0]?.imgFilePath === undefined) {
      // news null 체크, imgFilePath가 없으면 === aiNews이면
      set((state) => ({ newsList: [...news, ...state.newsList] }));
    } else {
      set((state) => ({ newsList: [...state.newsList, ...news] }));
    }
  },
}));

export const fetchNews = async (pageNum: number) => {
  const newsData = await (
    await fetch(`/api/news?searchMax=10&pageNum=${pageNum}`)
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
        throw new Error('Server-Failed to fetch fetchNews Data');
      }
    };
    getNews();
  }, []);
  return (
    <>
      <div className="w-[830px] max-lg:w-[500px] h-[600px] overflow-y-scroll no-scrollbar pt-3 px-3">
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
        {!newsList.length && (
          <div className="flex w-full justify-center">
            <Image
              src="/svgs/baseball.svg"
              width={0}
              height={0}
              alt="baseball"
              className="w-[80px] h-auto animate-spin"
            />
          </div>
        )}
        {newsList.length && <NewsLoader />}
      </div>
    </>
  );
}
