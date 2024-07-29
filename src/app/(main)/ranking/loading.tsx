import Image from 'next/image';

export default function Loading() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-black text-white min-h-screen">
        <div className="flex justify-center h-64 mb-8 max-sm:h-1/4">
          <Image
            src="/svgs/wiznews/newsMascot/ddory.svg"
            alt="ticket"
            width={0}
            height={0}
            className="w-auto h-[100%] "
          />
          <Image
            src="/svgs/wiznews/newsMascot/vic.svg"
            alt="ticket"
            width={0}
            height={0}
            className="w-auto h-[100%]"
          />
        </div>
        <p className="text-xl">빅과 또리가 열심히 불러오고 있습니다</p>
      </div>
    </>
  );
}
