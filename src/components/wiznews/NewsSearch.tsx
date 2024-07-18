'use client';

import { create } from 'zustand';
import Image from 'next/image';
import { KeyboardEvent } from 'react';

export type TNewsContent = {
  artcContents: string;
  artcTitle: string;
  artcSeq: Number;
  imgFilePath: string;
  [key: string]: any;
};

export type TNews = TNewsContent[];

type NewsStore = {
  news: TNews;
  setNews: (news: TNews) => void;
};

export const useNewsStore = create<NewsStore>()((set) => ({
  news: [],
  setNews: (news) => set((state) => ({ news: [...state.news, ...news] })),
}));

export default function NewsSearch() {
  const setNews = useNewsStore((state) => state.setNews);
  const handleEnter = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // const inputElement = e.target as HTMLInputElement;
      const newsData = await (await fetch(`/api/news`)).json();
      setNews(newsData);
    }
  };
  return (
    <>
      <div className="flex justify-between w-[480px] max-sm:w-full my-7">
        <Image
          src="/svgs/emblem.svg"
          alt="KT emblem"
          width={0}
          height={0}
          className="w-auto h-8"
        />
        <input
          type="text"
          name=""
          id=""
          className="font-['DungGeunMo'] w-[436px] max-sm:w-[90%] h-8 px-3 rounded-[10px] shadow-[inset_2px_3px_4px_rgba(0,0,0,0.25)]"
          placeholder="원하는 뉴스를 검색해 보세요! 예) KT 위즈, 김민 선수"
          onKeyDown={handleEnter}
        />
      </div>
    </>
  );
}
