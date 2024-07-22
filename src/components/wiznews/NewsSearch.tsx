'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useNewsListStore } from './NewsArea';
export default function NewsSearch() {
  const [dateType, setDateType] = useState('text');
  const [date, setDate] = useState('2024-07-11');
  const setNewsList = useNewsListStore((state) => state.setNewsList);
  const fetchAiNews = async () => {
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
  };
  return (
    <>
      <div className="flex justify-between w-[400px] max-sm:w-full my-7 relative">
        <Image
          src="/svgs/emblem.svg"
          alt="KT emblem"
          width={0}
          height={0}
          className="w-auto h-8"
        />
        <input
          type={dateType}
          placeholder="AI에게 날짜를 알려주세요!"
          name=""
          id=""
          min="2024-07-01"
          max="2024-07-22"
          className="w-[40%] font-['DungGeunMo'] max-sm:w-[90%] h-8 px-3 rounded-[10px] shadow-[inset_2px_3px_4px_rgba(0,0,0,0.25)]"
          value={date}
          onFocus={() => setDateType('date')}
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          className="flex justify-center items-center bg-white font-['DungGeunMo'] max-sm:w-[90%] h-8 px-3 rounded-[10px] shadow-[inset_2px_3px_4px_rgba(0,0,0,0.25)]"
          onClick={fetchAiNews}
        >
          경기 뉴스 생성
        </button>
      </div>
    </>
  );
}
