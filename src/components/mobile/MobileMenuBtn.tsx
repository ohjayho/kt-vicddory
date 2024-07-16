'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';

type MobileMenuBtnType = {
  title: string;
  subtitle?: string[];
};

export default function MobileMenuBtn({ title, subtitle }: MobileMenuBtnType) {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOpen = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <li className="w-full bg-white text-[4vw] border-b border-[#eceef2] mb-4">
        <div className="flex justify-between border-b border-[#f4f4f4] px-[5.5vw] py-[3.5vw]">
          <h1 className="text-[#ea0114] font-['NanumSquareNeoExtraBold']">
            {title}
          </h1>
          {subtitle && (
            <button className="w-[5vw] text-[#ea0114]" onClick={handleOpen}>
              {menuOpen ? (
                <FaChevronUp className="w-full" />
              ) : (
                <FaChevronDown className="w-full" />
              )}
            </button>
          )}
        </div>
        {subtitle &&
          menuOpen &&
          subtitle.map((sub: string) => (
            <div key={sub} className="px-[5.5vw] py-[3.5vw]">
              <h1>{sub}</h1>
            </div>
          ))}
      </li>
    </>
  );
}
