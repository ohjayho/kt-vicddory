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
        <div className="flex justify-between h-20 w-3/4 mx-auto  text-white items-center">
          <Link href="/">
            <Image
              src="/svgs/watermarkWhite.svg"
              alt="KT watermark"
              width={85}
              height={42}
            />
          </Link>
          <div className="w-4/6 flex justify-between">
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
          <Link href="http://kt-sports.co.kr/sports/site/main.do">
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
