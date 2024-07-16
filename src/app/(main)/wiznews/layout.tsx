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
        <NewsBanner />
        {children}
        {typeof document !== 'undefined' && createPortal(news, document.body)}
      </div>
    </>
  );
}
