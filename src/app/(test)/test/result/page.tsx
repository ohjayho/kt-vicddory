import Button from "@/components/test/Button";
import ResultPosition from "@/components/test/ResultPosition";
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
          <div className="w-full h-[1800px] bg-[#F8A6A7] relative flex flex-col justify-center items-center">
            <div className="absolute text-[#333333] font-bold top-12">가장 많은 포지션은 뭘까요?</div>
            <ResultPosition
              src="/svgs/test/catcher.svg"
              alt="catcher"
              width={238}
              height={297}
              text="타자의 심리를 읽는 포수"
            />
            <div className="text-[#333333] text-2xl font-bold mt-12">언제나 최전선, 배터리의 심장</div>
            <div className="text-[#BD1C1F] font-bold mt-2">#어깨깡패#블로킹#지휘자</div>
            <ResultPosition
              src="/svgs/test/outfielder.svg"
              alt="outfielder"
              width={290}
              height={315}
              text="빠른 발로 공을 쫓는 외야수"
            />
            <div className="text-[#333333] text-2xl font-bold mt-12">넓은 들판의 사냥꾼</div>
            <div className="text-[#BD1C1F] font-bold mt-2">#정확성#판단력#파워어깨</div>
            <ResultPosition
              src="/svgs/test/pitcher.svg"
              alt="pitcher"
              width={360}
              height={306}
              text="강속구를 던지는 투수"
            />
            <div className="text-[#333333] text-2xl font-bold mt-12">경기의 지휘자, 마운드의 왕</div>
            <div className="text-[#BD1C1F] font-bold mt-2">#끈기#제구력#침착</div>
            <ResultPosition
              src="/svgs/test/infielder.svg"
              alt="infielder"
              width={243}
              height={300}
              text="민첩한 동작의 내야수"
            />
            <div className="text-[#333333] text-2xl font-bold mt-12">순간의 반응, 내야의 수호자</div>
            <div className="text-[#BD1C1F] font-bold mt-2">#안정적#더블플레이#중심</div>
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
