export default function NewsBanner() {
  return (
    <>
      <div className="pt-20">
        <div className="h-[252px] bg-[url('/images/wiznews/newsBanner.png')] bg-cover bg-center flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl">wiz 한줄 뉴스</h1>
          <h1 className="mt-6 text-center">
            kt wiz의 새소식을 빅 또리 기자가
            <br className="sm:hidden" /> 쉽고 빠르게 전해드립니다.
          </h1>
        </div>
      </div>
    </>
  );
}
