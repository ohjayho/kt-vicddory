'use client';
import NewsContent from '@/components/wiznews/NewsContent';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function InterceptedWizNewsDetail() {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
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
        <NewsContent />
      </div>
    </>
  );
}
