'use client';

import Image from 'next/image';
import MobileMenuBtn from './MobileMenuBtn';

type handleMobileType = {
  handleMobileOpen: () => void;
  isMobileOpen: boolean;
  isAnimated: boolean;
};

export default function MobileMenu({
  handleMobileOpen,
  isMobileOpen,
  isAnimated,
}: handleMobileType) {
  return (
    <>
      <div
        className={`fixed z-20 ${isMobileOpen ? 'max-lg:flex' : 'hidden'} justify-between items-start w-full h-screen bg-[rgba(0,0,0,0.7)]`}
      >
        <ul
          className={`w-[80%] h-full overflow-scroll no-scrollbar bg-[#f4f4f4] absolute top-0 left-0 transition-transform duration-300 ${isAnimated ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <MobileMenuBtn
            handleMobileOpen={handleMobileOpen}
            title="kt wiz"
            subtitle={['kt wiz는?', '구단 BI', '회원정책']}
            pages={['/', '/', '/']}
          />
          <MobileMenuBtn
            handleMobileOpen={handleMobileOpen}
            title="wiz park"
            subtitle={[
              '수원 kt wiz park',
              '주차 예약',
              '찾아오기',
              '익산야구장',
            ]}
            pages={['/', '/', '/', '/']}
          />
          <MobileMenuBtn
            handleMobileOpen={handleMobileOpen}
            title="News"
            pages={['/wiznews']}
          />
          <MobileMenuBtn
            handleMobileOpen={handleMobileOpen}
            title="Player"
            subtitle={['투수', '타자']}
            pages={['/player/pitcher', '/player/batter']}
          />
          <MobileMenuBtn
            handleMobileOpen={handleMobileOpen}
            title="Ranking"
            subtitle={['AI 예측', '일자별', '년도별']}
            pages={['/ranking/ai', '/ranking/daily', '/ranking/year']}
          />
          <MobileMenuBtn
            handleMobileOpen={handleMobileOpen}
            title="성향 테스트"
            pages={['/test']}
          />
          <MobileMenuBtn
            handleMobileOpen={handleMobileOpen}
            title="Shop"
            pages={['https://www.ktwizstore.co.kr']}
          />
          <MobileMenuBtn
            handleMobileOpen={handleMobileOpen}
            title="티켓 구매"
            pages={['https://www.ticketlink.co.kr/home']}
          />
        </ul>
        <button
          onClick={handleMobileOpen}
          className={`absolute top-0 right-0 transition-opacity duration-300 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src="/svgs/mobileHeader/close.svg"
            width={0}
            height={0}
            alt="close_btn"
            className="w-[8.5vw] mr-[2vw] mt-[2vw] text-white"
          />
        </button>
      </div>
    </>
  );
}
