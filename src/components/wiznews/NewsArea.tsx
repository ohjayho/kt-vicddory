'use client';

import NewsBalloon from './NewsBalloon';
import { useNewsListStore } from './NewsSearch';

export default function NewsArea() {
  const newsList = useNewsListStore((state) => state.newsList);
  return (
    <>
      <div className="w-[820px] max-lg:w-[500px] h-[600px] overflow-y-scroll no-scrollbar">
        {newsList.length &&
          newsList.map((news, index) => (
            <NewsBalloon
              key={news.artcTitle}
              direction={index % 2 === 0 ? 'right' : 'left'}
              content={news.artcTitle}
              id={news.artcSeq}
            />
          ))}
      </div>
    </>
  );
}
