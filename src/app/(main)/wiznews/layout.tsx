'use client';
import NewsBanner from '@/components/wiznews/NewsBanner';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

export default function NewsLayout({
  children,
  news,
}: {
  children: ReactNode;
  news: ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen bg-black">
        <header className="h-[83px] bg-pink-200 sticky top-0"></header>
        <NewsBanner />
        {children}
        {typeof document !== 'undefined' && createPortal(news, document.body)}
      </div>
    </>
  );
}
