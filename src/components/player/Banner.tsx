'use client';

import BannerBtn from '../BannerBtn';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';

interface Submenu {
  children: string;
  // buttonStyle?: string;
  url: string;
}
interface BannerProps {
  title: string;
  subtitle: string;
  submenus?: Submenu[];
}

export default function BannerComponent({
  title: initialTitle,
  subtitle,
  submenus = [],
}: BannerProps) {
  const pathname = usePathname().split('/')[1];

  const [currentTitle, setCurrentTitle] = useState(initialTitle);

  useEffect(() => {
    const currentSubmenu = submenus.find((submenu) => pathname === submenu.url);
    if (currentSubmenu) {
      setCurrentTitle(currentSubmenu.children);
    } else {
      setCurrentTitle(initialTitle);
    }
  }, [pathname, submenus]);
  return (
    <>
      <div className="bg-[url('/images/bannerBg.png')] h-[252px] w-full flex flex-col items-center text-center text-white">
        <div>
          <h1 className="mt-14 text-5xl font-extrabold">{currentTitle}</h1>
          <p className="mt-11 text-xl">{subtitle} </p>
        </div>
        {submenus && submenus.length > 0 && (
          <div className="mt-8 flex  gap-[198px] text-base font-extrabold">
            {submenus.map((submenu, index) => (
              <Link href={submenu.url} key={index}>
                <button
                  className={`w-[116px] h-11 text-xl font-extrabold text-[#BBB5B5] border-white ${pathname === submenu.url ? 'text-white border-b-4' : ''}`}
                >
                  {submenu.children}
                </button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
