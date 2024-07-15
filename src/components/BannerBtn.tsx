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
          className={`w-28 max-sm:w-16 h-11 text-xl max-sm:text-lg font-extrabold text-[#BBB5B5] border-white ${buttonStyle}`}
        >
          {children}
        </button>
      </Link>
    </>
  );
}
