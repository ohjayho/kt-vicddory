'use client';

import Button from '@/components/test/Button';
import ModalTestWrapper from '@/components/test/ModalTestWrapper';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const closeModal = () => {
    setIsModalOpen(false);
  }

  useEffect(() => {
    if (!isModalOpen) {
      router.push('/');
    }
  }, [isModalOpen, router]);

  return (
    <>
      {pathname === '/testModal' ? (
        <ModalTestWrapper>
          <div className="flex justify-center flex-col items-center h-dvh max-w-md m-auto relative">
            <div className="w-[448px] h-4/6 bg-[#F8A6A7] flex flex-col justify-center items-center text-center">
              <button
                onClick={closeModal}
                className="absolute text-2xl right-2 top-0 text-slate-400 hover:text-black"
              >
                x
              </button>
              <div className="w-2/5 rounded-md bg-[#ED2024] text-white flex justify-center items-center text-base py-1 mb-6 mt-12">
                야구 입문자를 위한
              </div>
              <Image
                src="/svgs/watermark.svg"
                alt="watermark"
                width={200}
                height={62}
                className="w-40 md:w-[200px]"
              />
              <div className="w-60 h-14 text-5xl font-bold mb-3 mt-3 text-[#333333]">
                궁합테스트
              </div>
              <div className="w-60 text-sm font-bold text-[#444444] my-4">
                나와 어울리는 KT Wiz 선수 알아보기!
              </div>
              <Image
                src="/svgs/emblem.svg"
                alt="emblem"
                width={200}
                height={180}
                className="w-40 md:w-[200px] mb-4"
              />
              <Button width={80} text="2xl" href="/questionsModal">
                테스트 START
              </Button>
            </div>
            <div className="w-full h-2/6 bg-[#FFFFFF] flex flex-col justify-center items-center text-center">
              <div className="w-74 h-[95px] text-sm mt-1 text-[#333333]">
                kt wiz는 2013년, 제 10구단에 대한 국민들의 강한 열망,
                <br /> 경기도 및 수원시 그리고 KT그룹의 뜨거운 유치 열정으로
                <br /> 비상한 솜씨와 비범한 재능을 가진 마법사,
                <br />
                wiz라는 이름으로 신비롭고 강력한 힘으로 상상의 야구를
                <br /> 실현하겠다는 의지를 가지고 새롭게 출범하였습니다.
              </div>
            </div>
          </div>
        </ModalTestWrapper>
      ) : null }
    </>
  );
}
