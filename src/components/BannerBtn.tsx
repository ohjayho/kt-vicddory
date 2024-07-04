import Link from 'next/link';
import { ReactNode } from 'react';

type bannerBtnType = {
  children: ReactNode;
  buttonStyle?: string;
  url: string;
};

export default function BannerBtn({
  children,
  buttonStyle,
  url,
}: bannerBtnType) {
  return (
    <>
      <Link href={url}>
        <button
          className={`w-[116px] h-11 text-xl font-extrabold text-[#BBB5B5] border-white ${buttonStyle}`}
        >
          {children}
        </button>
      </Link>
    </>
  );
}
