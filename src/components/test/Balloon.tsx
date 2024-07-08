import { ReactNode } from "react";

type TBalloonProps = {
  children: ReactNode;
  className: string;
};

export default function Balloon({ children, className }: TBalloonProps) {
  return (
    <>
      <div className={className}>
        <div className="relative m-20 p-2 bg-white border-4 border-blue-200 rounded-full w-96 h-16 text-[#333333] flex justify-center items-center">
          {children}
        </div>
      </div>
    </>
  );
}