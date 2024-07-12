'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 930 ? setIsScrolled(true) : setIsScrolled(false);
    };

    if (isHome) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome]);

  return (
    <>
      <div
        className={`w-full fixed ${isHome ? (isScrolled ? 'bg-black' : 'bg-transparent') : 'bg-black'}`}
      >
        <div className="flex justify-between h-20 max-lg:h-[13vw] w-3/4 mx-auto  text-white items-center">
          <Link href="/" className="hidden max-lg:flex items-center h-full">
            <Image
              src="/svgs/header/hamburger.svg"
              alt="ticket"
              width={0}
              height={0}
              className="w-auto h-[50%]"
            />
          </Link>
          <Link href="/" className="flex h-full items-center -mt-4">
            <Image
              src="/svgs/watermarkWhite.svg"
              alt="KT watermark"
              width={0}
              height={0}
              className="w-[85px] max-lg:w-auto max-lg:h-[50%]"
            />
          </Link>
          <Link href="/" className="hidden max-lg:flex items-center h-full">
            <Image
              src="/svgs/header/ticket.svg"
              alt="menu"
              width={0}
              height={0}
              className="w-auto h-[50%]"
            />
          </Link>
          <div className="w-4/6 flex justify-between max-lg:hidden">
            <Link href="/">kt wiz</Link>
            <Link href="/">wiz park</Link>
            <Link href="/wiznews">News</Link>
            <Link href="/player">Player</Link>
            <Link href="/ranking">Ranking</Link>
            <Link href="https://www.ktwizstore.co.kr">Shop</Link>
            <div className="text-red-100 font-extrabold">
              <Link href="https://www.ticketlink.co.kr/home">티켓 구매</Link>
            </div>
          </div>
          <Link
            href="http://kt-sports.co.kr/sports/site/main.do"
            className="max-lg:hidden"
          >
            <div className="w-[102px] h-[46px] grid place-items-center border border-slate-600 rounded-md">
              <Image
                src="/images/ktsports.png"
                alt="KT sports"
                width={66}
                height={18}
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
