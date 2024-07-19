'use client';
import NewsContent from '@/components/wiznews/NewsContent';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

export type TParams = {
  params: { newsId: string };
};

export default function InterceptedWizNewsDetail({ params }: TParams) {
  const newsId = params.newsId;
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      e.stopPropagation();
      if (ref?.current === (e.target as Node)) {
        router.back();
      }
    };
    window.addEventListener('click', clickHandler);
    return () => window.removeEventListener('click', clickHandler);
  });

  return (
    <>
      <div
        className="w-full h-full bg-black bg-opacity-30 z-20 fixed top-0 flex justify-center items-center"
        ref={ref}
      >
        <NewsContent newsId={newsId} />
      </div>
    </>
  );
}
