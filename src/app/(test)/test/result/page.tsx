import Button from "@/components/test/Button";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="bg-slate-100">
        <div className="flex justify-center flex-col items-center h-full max-w-md m-auto">
          <div className="w-full h-[600px] bg-[#FFFFFF] flex flex-col justify-center items-center relative">
            <div className="absolute flex justify-center items-center top-10 w-72 h-9 bg-[#ED2024] rounded-full">당신의 ♥천생연분♥ 야구선수는?</div>
            <Image
            src="/svgs/test/resultBackground.svg"
            alt="emblem"
            width={500}
            height={120}
            className="absolute bottom-0"
            />
          </div>
          <div className="w-full h-[1500px] bg-[#F8A6A7] flex flex-col justify-center items-center">
            <div className="text-[#333333]">가장 많은 포지션은 뭘까요?</div>
            <Image
            src="/svgs/test/hitter.svg"
            alt="emblem"
            width={420}
            height={330}
            className="mr-14"
            />
            <div className="text-[#333333] text-2xl font-bold mt-12">홈런 제조기, 한 방의 마법사</div>
            <div className="text-[#BD1C1F] font-bold mt-2">#빠른발#선천적리더#전략적</div>
            <Image
            src="/svgs/test/catcher.svg"
            alt="emblem"
            width={365}
            height={316}
            className="mr-4"
            />
            <div className="text-[#333333] text-2xl font-bold mt-12">언제나 최전선, 배터리의 심장</div>
            <div className="text-[#BD1C1F] font-bold mt-2">#어깨깡패#블로킹#지휘자</div>
            <Image
            src="/svgs/test/outfielder.svg"
            alt="emblem"
            width={365}
            height={337}
            className="mr-4"
            />
            <div className="text-[#333333] text-2xl font-bold mt-12">넓은 들판의 사냥꾼</div>
            <div className="text-[#BD1C1F] font-bold mt-2">#정확성#판단력#파워어깨</div>
          </div>
          <div className="w-full h-[250px] bg-[#FFFFFF] flex flex-col justify-center items-center">
          <Button href="/test/questions/1">테스트 다시하기</Button>
          <div className="text-lg font-bold mt-10">
            <span className="text-[#ED2024]">테스트</span>
            <span className="text-[#333333]">공유하기</span>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
