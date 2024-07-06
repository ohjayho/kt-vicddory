import { ReactNode } from "react";

export default function Balloon({ children }: { children: ReactNode }) {
  return (
    <div className="relative m-20 p-2 bg-white border-2 border-blue-200 rounded-full w-96 h-24">
      <div
        className="absolute w-0 h-0 border-x-[12px] border-x-transparent border-b-[24px] border-b-white"
        style={{ top: '-21px', left: '192px', zIndex: 1 }}
      ></div>
      <div
        className="absolute w-0 h-0 border-x-[12px] border-x-transparent border-b-[24px] border-b-blue-200"
        style={{ top: '-23px', left: '192px', zIndex: 0 }}
      ></div>
      {children}
    </div>
  );
}