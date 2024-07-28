import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center bg-black text-white min-h-screen">
      <div className="flex justify-center h-64 mb-8 max-sm:h-1/4">
        <Image
          src="/svgs/newsMascot/ddory.svg"
          alt="ticket"
          width={0}
          height={0}
          className="w-auto h-[100%] "
        />
        <Image
          src="/svgs/newsMascot/vic.svg"
          alt="ticket"
          width={0}
          height={0}
          className="w-auto h-[100%]"
        />
      </div>
      <p className="text-xl mb-8">요청하신 페이지를 찾을 수 없습니다</p>
      <div>
        <Link href="/" className="text-red-60 hover:cursor-pointer">
          {/* <button type="button" className=""> */}
          홈으로 돌아가기
          {/* </button> */}
        </Link>
      </div>
    </div>
  );
}
