import { ReactNode } from 'react';

type bannerBtnType = {
  children: ReactNode;
  buttonStyle?: string;
};

export default function BannerBtn({ children, buttonStyle }: bannerBtnType) {
  return (
    <>
      <button className={`w-[116px] h-[42px] border-white ${buttonStyle}`}>
        {children}
      </button>
    </>
  );
}
