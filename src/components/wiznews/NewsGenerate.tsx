'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useNewsListStore } from './NewsArea';

export default function NewsGenerate() {
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
        regDttm: new Date(date).getTime(),
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
          className="w-[40%] font-['DungGeunMo'] h-full px-3 rounded-[10px] shadow-[inset_2px_3px_4px_rgba(0,0,0,0.25)]"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          className="generate-btn-wrapper h-full w-[140px] text-white font-['DungGeunMo']"
          onClick={fetchAiNews}
        >
          <div className="generate-btn-content flex items-center justify-center text-base">
            {loading ? (
              <div className="ball animate-spin"></div>
            ) : (
              'AI 뉴스 생성'
            )}
          </div>
        </button>
      </div>
    </>
  );
}
