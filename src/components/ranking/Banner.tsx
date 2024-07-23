'use client';

import BannerBtn from '../BannerBtn';
import { usePathname } from 'next/navigation';

type TPathNameText = {
  [key: string]: {
    title: string;
    subTitle: string;
  };
};

export default function Banner() {
  const pathname = usePathname().split('/')[2];

  const commonText = {
    title: '팀순위',
    subTitle: '팀 별 순위 변동 그래프에 대해 알려드립니다',
  };
  const text: TPathNameText = {
    ai: {
      title: '오늘의 매치',
      subTitle: '오늘의 매치에 대해 AI가 예측합니다',
    },
    daily: commonText,
    year: commonText,
  };

  return (
    <>
      <div className="flex-none pt-20">
        <div className="bg-[url('/images/bannerBg.png')] h-[252px] w-full flex flex-col items-center text-center text-white">
          <div>
            <h1 className="mt-14 text-5xl max-sm:text-3xl font-extrabold">
              {text[pathname]?.title}
            </h1>
            <p className="mt-11 text-xl max-sm:text-lg">
              {text[pathname]?.subTitle}
            </p>
          </div>
          <div className="mt-8 flex gap-48 max-md:gap-14 max-sm:gap-11 text-base font-extrabold">
            <BannerBtn
              url="/ranking/ai"
              buttonStyle={pathname === 'ai' ? ' text-white border-b-4' : ''}
            >
              AI 예측
            </BannerBtn>
            <BannerBtn
              url="/ranking/daily"
              buttonStyle={pathname === 'daily' ? ' text-white border-b-4' : ''}
            >
              일자별
            </BannerBtn>
            <BannerBtn
              url="/ranking/year"
              buttonStyle={pathname === 'year' ? ' text-white border-b-4' : ''}
            >
              년도별
            </BannerBtn>
          </div>
        </div>
      </div>
    </>
  );
}
