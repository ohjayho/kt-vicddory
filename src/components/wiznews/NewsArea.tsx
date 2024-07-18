'use client';

import NewsBalloon from './NewsBalloon';
import { useNewsStore } from './NewsSearch';

export default function NewsArea() {
  const news = useNewsStore((state) => state.news);
  return (
    <>
      <div className="w-[820px] max-lg:w-[500px] h-[600px] overflow-y-scroll no-scrollbar">
        {news.length &&
          news.map((news, index) => (
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
