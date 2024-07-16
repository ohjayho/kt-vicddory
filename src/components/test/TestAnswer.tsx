import { ReactNode } from 'react';

type TTestAnswerProps = {
  children: ReactNode;
	onClick(): void;
}

export default function TestAnswer({ children, onClick }: TTestAnswerProps) {
  return (
    <>
      <button onClick={onClick} className="border-2 border-[#F8A6A7] w-80 h-24 rounded-full px-10 mb-4 text-4 font-semibold text-[#333333]">
        {children}
      </button>
    </>
  );
}
