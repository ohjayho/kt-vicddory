export default function NewsBanner() {
  return (
    <>
      <div className="pt-20 max-lg:pt-[13vw]">
        <div className="h-[252px] bg-[url('/images/wiznews/newsBanner.png')] bg-cover bg-center flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl">wiz AI 뉴스</h1>
          <h1 className="mt-6 text-center">
            날짜에 맞는 경기 내용을 빅 또리 기자가
            <br className="sm:hidden" /> 생생하게 전해드립니다.
          </h1>
        </div>
      </div>
    </>
  );
}
