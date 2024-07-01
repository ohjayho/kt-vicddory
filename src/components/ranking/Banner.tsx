import BannerBtn from '../BannerBtn';

export default function Banner() {
  return (
    <>
      <div className="bg-[url('/images/bannerBg.png')] h-[252px] w-full flex flex-col items-center text-center text-white">
        <div>
          <h1 className="mt-[52px] text-2xl font-extrabold">
            팀 별 순위 변동 그래프
          </h1>
          <p className="mt-[30px] text-xl">
            팀 별 순위 변동 그래프에 대해 알려드립니다
          </p>
        </div>
        <div className="mt-[68px] flex  gap-[198px] text-base font-extrabold text-[#BBB5B5]">
          <BannerBtn buttonStyle="border-b-4">AI 예측</BannerBtn>
          <BannerBtn>일자별</BannerBtn>
          <BannerBtn>년도별</BannerBtn>
        </div>
      </div>
    </>
  );
}
