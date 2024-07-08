import Mascot from '@/components/wiznews/Mascot';
import NewsBalloon from '@/components/wiznews/NewsBalloon';
import NewsSearch from '@/components/wiznews/NewsSearch';

export default function WizNews() {
  return (
    <>
      <div className="w-full flex justify-center  bg-[url('/images/mainBg.png')] bg-cover relative overflow-hidden">
        <Mascot src="svgs/newsMascot/ddory.svg" location="left" />
        <Mascot src="svgs/newsMascot/vic.svg" location="right" />
        <section className="w-3/4 flex flex-col justify-center items-center z-10">
          <NewsSearch />
          <div className="w-[820px] max-lg:w-[500px] h-[600px] overflow-y-scroll no-scrollbar">
            <NewsBalloon
              direction="right"
              content="KT 위즈는 6월 19일 롯데전에서 에픽하이를 초청해 시구 행사를 진행합니다 KT 위즈는 6월 19일 롯데전에서 에픽하이를 초청해 시구 행사를 진행합니다."
            />
            <NewsBalloon direction="left" content="나는 오재호다." />
            <NewsBalloon direction="right" content="나는 빅이다." />
            <NewsBalloon direction="left" content="나는 또리다." />
            <NewsBalloon direction="right" content="나는 빅이다." />
            <NewsBalloon direction="left" content="나는 또리다." />
            <NewsBalloon direction="right" content="나는 빅이다." />
            <NewsBalloon direction="left" content="나는 또리다." />
            <NewsBalloon direction="right" content="나는 빅이다." />
            <NewsBalloon direction="left" content="나는 또리다." />
            <NewsBalloon direction="right" content="나는 빅이다." />
          </div>
        </section>
      </div>
    </>
  );
}
