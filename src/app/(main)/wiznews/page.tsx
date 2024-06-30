export default function WizNews() {
  return (
    <>
      <div className="min-h-screen bg-black">
        <header className="h-[83px] bg-pink-200"></header>
        <div className="h-[253px] bg-[url('/images/wiznews/wiznews_banner.png')] bg-cover bg-center flex flex-col justify-center items-center text-white">
          <h1>wiz 한줄 뉴스</h1>
          <h1>kt wiz의 새소식을 빅 또리 기자가 쉽고 빠르게 전해드립니다.</h1>
        </div>
        <div className="w-full h-[800px] flex justify-center  bg-[url('/images/wiznews/wiznews_bg.png')] bg-cover bg-center">
          <div className="absolute bottom-4 left-0"></div>
          <section className="w-[820px] flex flex-col"></section>
        </div>
      </div>
    </>
  );
}
