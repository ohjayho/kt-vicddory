import Button from '@/components/test/Button';
import Image from 'next/image';

export default function Modal() {
  return (
    <div className="flex justify-center flex-col items-center h-3/4 max-w-md m-auto">
      <div className="w-96 h-4/6 rounded-t bg-[#F8A6A7] flex flex-col justify-center items-center text-center">
        <div className="w-2/5 rounded-md bg-[#ED2024] text-white flex justify-center items-center text-base py-1 mb-2 mt-12">
          야구 입문자를 위한
        </div>
        <Image
          src="/svgs/watermark.svg"
          alt="watermark"
          width={200}
          height={62}
          className="w-36"
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
          className="w-36 mb-1"
        />
        <Button width={32} text="xl" href="/testModal/questions/1">
          테스트 START
        </Button>
      </div>
      <div className="w-96 h-2/6 rounded-b bg-[#FFFFFF] flex flex-col justify-center items-center text-center">
        <div className="w-74 h-[95px] text-sm mt-4 text-[#333333]">
          kt wiz는 2013년, 제 10구단에 대한 국민들의 강한 열망,
          <br /> 경기도 및 수원시 그리고 KT그룹의 뜨거운 유치 열정으로
          <br /> 비상한 솜씨와 비범한 재능을 가진 마법사,
          <br />
          wiz라는 이름으로 신비롭고 강력한 힘으로 상상의 야구를
          <br /> 실현하겠다는 의지를 가지고 새롭게 출범하였습니다.
        </div>
      </div>
    </div>
  );
}
