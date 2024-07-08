'use client';

import { usePathname } from 'next/navigation';
// import { useState } from 'react';
import BannerBtn from '../BannerBtn';

interface BannerProps {
  title: string;
}

export default function Banner({ title: initialTitle }: BannerProps) {
  const pathname = usePathname().split('/')[1];

  // const [currentTitle, setCurrentTitle] = useState(initialTitle);

  return (
    <>
      <div className="bg-[url('/images/bannerBg.png')] h-[252px] w-full flex flex-col items-center text-center text-white">
        <div>
          <h1 className="mt-14 text-5xl font-extrabold">{initialTitle}</h1>
          <p className="mt-11 text-xl">
            kt wiz의 자랑스런 ‘첫 번째 선수단’을 소개합니다
          </p>
        </div>
        <div className="mt-8 flex  gap-[198px] text-base font-extrabold">
          <BannerBtn
            url="/player/coach"
            buttonStyle={pathname === 'coach' ? ' text-white border-b-4' : ''}
          >
            코칭스탭
          </BannerBtn>
          <BannerBtn
            url="/player/pitcher"
            buttonStyle={pathname === 'pitcher' ? ' text-white border-b-4' : ''}
          >
            투수
          </BannerBtn>
          <BannerBtn
            url="/player/batter"
            buttonStyle={pathname === 'batter' ? ' text-white border-b-4' : ''}
          >
            타자
          </BannerBtn>
          <BannerBtn
            url="/player/cheerleader"
            buttonStyle={
              pathname === 'cheerleader' ? ' text-white border-b-4' : ''
            }
          >
            응원단
          </BannerBtn>
        </div>
      </div>
    </>
  );
}
