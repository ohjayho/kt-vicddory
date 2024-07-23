'use client';

import Button from '@/components/test/Button';
import Image from 'next/image';
import { IoIosClose } from 'react-icons/io';

export default function Default() {
  return (
    <>
      <div className="w-[500px] h-[500px] rounded-md fixed top-1/2 left-1/2 p-5 bg-white shadow -translate-x-1/2 -translate-y-1/2">
        <IoIosClose className="absolute text-3xl right-2 top-2 text-slate-400 hover:text-black" />
        <div onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-center flex-col items-center gap-2 mt-4">
            <h1 className="text-2xl font-bold">
              AI가 알려주는 나와 잘 맞는 야구선수는?
            </h1>
            <p className="text-xl">❤️포토카드가 나오는 야구 성향 테스트!!❤️</p>
          </div>
          <div className="flex justify-center flex-col items-center mt-14">
            <Image
              src="/svgs/test/modal.svg"
              alt="emblem"
              width={500}
              height={120}
              className="w-72 -mb-4 mr-11"
            />
            <Button width={52} text="xl" href="/testModal">
              👉🏻AI 야구 성향 테스트하러 가기👈🏻
            </Button>
          </div>
          <Image
            src="/svgs/test/result/resultBackground.svg"
            alt="emblem"
            width={500}
            height={120}
            className="absolute rounded-b-md -bottom-px left-0 w-full"
          />
        </div>
      </div>
    </>
  );
}
