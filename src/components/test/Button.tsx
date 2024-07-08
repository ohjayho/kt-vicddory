import Link from 'next/link';
import { ReactNode } from 'react';

type TButtonProps = {
  children: ReactNode;
  href: string;
};

export default function Button({ children, href }: TButtonProps) {
  return (
    <>
      <div className="mt-4 z-[100]">
        <Link href={href}>
          <button className="bg-[#ED2024] text-white font-bold text-2xl py-3 px-20 mt-2 xs:px-28 rounded-[375px] hover:shadow-[inset_6px_6px_5px_rgba(189,28,31)] hover:ml-1 hover:mt-2 transition-colors duration-200 shadow-[0px_3px_1px_5px_rgba(189,28,31)]">
            {children}
          </button>
        </Link>
      </div>
    </>
  );
}
