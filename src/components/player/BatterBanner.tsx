import Link from 'next/link';
import { ReactNode } from 'react';
type batterBannerType = {
  children: ReactNode;
  buttonStyle?: string;
  url: string;
};

export default function BatterBanner({
  children,
  buttonStyle,
  url,
}: batterBannerType) {
  return (
    <>
      <Link href={url}>
        <button
          className={`w-28 max-sm:w-16 h-11 text-lg max-sm:text-sm font-extrabold text-[#000000] border-white ${buttonStyle}`}
        >
          {children}
        </button>
      </Link>
    </>
  );
}
