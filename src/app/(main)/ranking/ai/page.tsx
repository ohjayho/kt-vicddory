import Image from 'next/image';

export default function RankingAi() {
  return (
    <>
      <div className="bg-[url('/images/mainBg.png')] bg-cover relative overflow-hidden">
        <div className="w-3/4 mx-auto text-white pb-16 ">
          <div className="flex justify-center items-center gap-12 mt-24">
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/svgs/emblem.svg"
                alt="KT emblem"
                width={200}
                height={200}
              />
              <p className="text-4xl font-extrabold mt-7">KT</p>
              <p className="mt-3 text-xl">7위 · 38승2무44패</p>
            </div>
            <div className="text-center">
              <h1 className="text-7xl text-[#B3B3B3] font-extrabold">VS</h1>
              <p className="mt-4 text-xl">수원구장</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/svgs/teamEmblem/doosan.svg"
                alt="KT emblem"
                width={200}
                height={200}
              />
              <p className="text-4xl font-extrabold mt-7">두산</p>
              <p className="mt-3 text-xl">9위 · 35승2무44패</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-8 mt-11">
            <div className="flex w-full justify-center items-center gap-5">
              <div className="w-full flex justify-end">
                <div className="w-[44%] h-8 bg-[#F14D50] relative">
                  <p className="absolute right-1 top-1">0.499</p>
                </div>
              </div>
              <p className="whitespace-nowrap">과거 승률</p>
              <div className="w-full">
                <div className="w-[55%] h-8 bg-[#6D6D6D] relative">
                  <p className="absolute left-1 top-1">0.551</p>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-center items-center gap-5">
              <div className="w-full flex justify-end">
                <div className="w-[62%] h-8 bg-[#F14D50] relative">
                  <p className="absolute right-1 top-1">0.625</p>
                </div>
              </div>
              <p className="whitespace-nowrap">최근 승률</p>
              <div className="w-full">
                <div className="w-[37%] h-8 bg-[#6D6D6D] relative">
                  <p className="absolute left-1 top-1">0.375</p>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-center items-center gap-5">
              <div className="w-full flex justify-end">
                <div className="w-[60%] h-8 bg-[#F14D50] relative">
                  <p className="absolute right-1 top-1">60%</p>
                </div>
              </div>
              <p className="whitespace-nowrap">예상 승률</p>
              <div className="w-full">
                <div className="w-[40%] h-8 bg-[#6D6D6D] relative">
                  <p className="absolute left-1 top-1">40%</p>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-center items-center gap-5">
              <p className="w-full text-end">고영표</p>
              <p className="whitespace-nowrap">선발 투수</p>
              <p className="w-full">곽빈</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
