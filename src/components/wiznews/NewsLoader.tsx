import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { fetchNews, useNewsListStore } from './NewsArea';

export default function NewsLoader() {
  const idRef = useRef(2);
  const { ref, inView } = useInView();
  const [loading, setLoading] = useState(false);
  const newsList = useNewsListStore((state) => state.newsList);
  const setNewsList = useNewsListStore((state) => state.setNewsList);
  useEffect(() => {
    if (inView && !loading) {
      setLoading(true);
      fetchNews(idRef.current++).then((res) => {
        setNewsList(res);
      });
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  }, [inView, newsList]);
  return (
    <>
      {/* {newsList.length &&
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
        )} */}
      <div ref={ref} className="flex w-full justify-center">
        <Image
          src="/svgs/baseball.svg"
          width={0}
          height={0}
          alt="baseball"
          className="w-[80px] h-auto animate-spin"
        />
      </div>
    </>
  );
}
