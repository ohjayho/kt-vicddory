import Link from 'next/link';
import { ReactNode } from 'react';

type TButtonProps = {
  children: ReactNode;
  href: string;
  width: number;
  text: string
};

export default function Button({ children, href, width, text }: TButtonProps) {
  return (
    <>
      <div className="z-[100]">
        <Link href={href}>
          <button className={`bg-[#ED2024] w-80 md:w-${width} text-white font-bold text-${text} py-3 px-0 mt-2 xs:px-28 rounded-[375px] hover:shadow-[inset_6px_6px_5px_rgba(189,28,31)] hover:ml-1 hover:mt-2 transition-colors duration-200 shadow-[0px_3px_1px_5px_rgba(189,28,31)]`}>
            {children}
          </button>
        </Link>
      </div>
    </>
  );
}