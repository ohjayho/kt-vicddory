'use client';

import { usePathname } from 'next/navigation';
// import { useState } from 'react';
import BannerBtn from '../BannerBtn';
import BatterBanner from './BatterBanner';
//interface BannerProps {
//title: string;
//  subtitle: string;
//}
type TPathNameText = {
  [key: string]: {
    title: string;
    subtitle: string;
  };
};
export default function Banner() {
  const pathname = usePathname().split('/')[2];
  const pathname2 = usePathname().split('/')[3];
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
      <div className="bg-[url('/images/bannerBg.png')] h-[252px] w-full pb-4 flex flex-col items-center text-center text-white">
        <div>
          <h1 className="mt-14 text-5xl font-extrabold">
            {text[pathname]?.title}
          </h1>
          <p className="mt-11 text-xl">{text[pathname]?.subtitle}</p>
        </div>
        <div className="mt-8 flex gap-[198px] text-base font-extrabold">
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
            {pathname === 'batter' ? (
              <div className="">
                <div className="sticky pb-0 mt-[15px] h-auto w-full ">
                  <div className="flex sticky justify-between mt-[10px] mx-auto text-black items-center w-full h-auto bg-white">
                    <div className="flex flex-row w-20 items-center whitespace-nowrap bg-white">
                      <BatterBanner
                        url="catcher"
                        buttonStyle={
                          pathname2 == 'catcher'
                            ? 'text-white bg-red-500'
                            : 'bg-white hover:bg-red-500 hover:text-white'
                        }
                      >
                        포수
                      </BatterBanner>
                      <BatterBanner
                        url="infielder"
                        buttonStyle={
                          pathname2 == 'infielder'
                            ? 'text-white bg-red-500'
                            : 'bg-white hover:bg-red-500 hover:text-white'
                        }
                      >
                        내야수
                      </BatterBanner>
                      <BatterBanner
                        url="outfielder"
                        buttonStyle={
                          pathname2 == 'outfielder'
                            ? 'text-white bg-red-500'
                            : 'bg-white hover:bg-red-500 hover:text-white'
                        }
                      >
                        외야수
                      </BatterBanner>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </BannerBtn>{' '}
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
