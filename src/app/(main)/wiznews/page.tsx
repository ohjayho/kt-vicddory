import Mascot from '@/components/wiznews/Mascot';
import NewsBalloon from '@/components/wiznews/NewsBalloon';
import NewsSearch from '@/components/wiznews/NewsSearch';

type TNewsContent = {
  img_url: string;
  link: string;
  title: string;
};

type TNews = TNewsContent[];

export default async function WizNews() {
  const getNews = async () => {
    const res = await fetch(
      'http://3.35.50.52:5002/news?query=KTwiz&page=1&count=10',
    );
    const data: TNews = await res.json();
    return data;
  };

  const displayNews = await getNews();

  return (
    <>
      <div className="w-full flex justify-center  bg-[url('/images/mainBg.png')] bg-cover relative overflow-hidden">
        <Mascot src="svgs/newsMascot/ddory.svg" location="left" />
        <Mascot src="svgs/newsMascot/vic.svg" location="right" />
        <section className="w-3/4 flex flex-col justify-center items-center z-10">
          <NewsSearch />
          <div className="w-[820px] max-lg:w-[500px] h-[600px] overflow-y-scroll no-scrollbar">
            {displayNews.map((news, index) => (
              <NewsBalloon
                direction={index % 2 === 0 ? 'right' : 'left'}
                content={news.title}
              />
            ))}
            {/* <NewsBalloon
              direction="right"
              content="KT 위즈는 6월 19일 롯데전에서 에픽하이를 초청해 시구 행사를 진행합니다 KT 위즈는 6월 19일 롯데전에서 에픽하이를 초청해 시구 행사를 진행합니다"
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
            <NewsBalloon direction="right" content="나는 빅이다." /> */}
          </div>
        </section>
      </div>
    </>
  );
}
