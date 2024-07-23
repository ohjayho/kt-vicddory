'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useNewsListStore } from './NewsArea';
export default function NewsSearch() {
  // const [dateType, setDateType] = useState('text');
  const [date, setDate] = useState('2024-07-11');
  const [loading, setLoading] = useState(false);
  const setNewsList = useNewsListStore((state) => state.setNewsList);
  const fetchAiNews = async () => {
    setLoading(true);
    const aiNewsData = await (
      await fetch(`/api/ainews?date=${date.split('-').join('')}`, {
        cache: 'no-store',
      })
    ).json();
    const aiNews = [
      {
        artcContents: aiNewsData.content,
        artcTitle: aiNewsData.title,
        artcSeq: Date.now(),
      },
    ];
    setNewsList(aiNews);
    setLoading(false);
  };

  return (
    <>
      <div className="flex justify-between w-[400px] h-[40px] max-sm:w-full my-7 relative">
        <Image
          src="/svgs/emblem.svg"
          alt="KT emblem"
          width={0}
          height={0}
          className="w-auto h-8"
        />
        <input
          type="date"
          name=""
          id=""
          min="2024-07-01"
          max="2024-07-22"
          className="w-[40%] font-['DungGeunMo'] max-sm:w-[90%] h-full px-3 rounded-[10px] shadow-[inset_2px_3px_4px_rgba(0,0,0,0.25)]"
          value={date}
          // onFocus={() => setDateType('date')}
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          className="h-full w-[160px] flex justify-center items-center font-['DungGeunMo'] text-white max-sm:w-[90%] px-3 rounded-[10px] shadow-[inset_2px_3px_4px_rgba(0,0,0,0.25)]"
          onClick={fetchAiNews}
        >
          <div className="h-full w-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-base px-5 py-2.5 flex justify-center items-center">
            {loading ? '로딩 중' : 'AI 뉴스 생성'}
          </div>
        </button>
      </div>
    </>
  );
}
