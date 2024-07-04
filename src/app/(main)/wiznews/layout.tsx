import NewsBanner from '@/components/wiznews/NewsBanner';
import { ReactNode } from 'react';

export default function NewsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="min-h-screen bg-black">
        <header className="h-[83px] bg-pink-200 sticky top-0"></header>
        <NewsBanner />
        {children}
      </div>
    </>
  );
}
