// 'use client';
import NewsBanner from '@/components/wiznews/NewsBanner';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

export const metadata = {
  title: '위즈 뉴스',
  description:
    'AI가 경기 일정에 따라 실감나는 뉴스를 자동으로 생성하는 kt wiz의 새로운 기능! 최신 경기 업데이트와 팀 소식을 놓치지 마세요.',
};

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
        {/* {typeof document !== 'undefined' && createPortal(news, document.body)} */}
      </div>
    </>
  );
}
