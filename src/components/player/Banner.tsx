'use client';

import { usePathname } from 'next/navigation';
// import { useState } from 'react';
import BannerBtn from '../BannerBtn';

interface BannerProps {
  title: string;
  subtitle: string;
}
type TPathNameText = {
  [key: string]: {
    title: string;
    subtitle: string;
  };
};
export default function Banner() {
  const pathname = usePathname().split('/')[2];
  const text: TPathNameText = {
    coach: {
      title: '코칭스탭',
      subtitle: '최고의 kt wiz 코칭스탭을 소개합니다.',
    },
    pitcher: {
      title: '투수',
      subtitle: 'kt wiz의 자랑스런 ‘첫 번째 선수단’을 소개합니다',
    },
    batter: {
      title: '타자',
      subtitle: 'kt wiz의 자랑스런 ‘첫 번째 선수단’을 소개합니다',
    },
    cheerleader: {
      title: '응원단',
      subtitle: 'kt wiz꽃! kt wiz의 응원단',
    },
  };

  return (
    <>
      <div className="bg-[url('/images/bannerBg.png')] h-[252px] w-full flex flex-col items-center text-center text-white">
        <div>
          <h1 className="mt-14 text-5xl font-extrabold">
            {text[pathname]?.title}
          </h1>
          <p className="mt-11 text-xl">{text[pathname]?.subtitle}</p>
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
