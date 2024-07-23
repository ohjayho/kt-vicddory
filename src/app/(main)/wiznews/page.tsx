import Mascot from '@/components/wiznews/Mascot';
import NewsArea from '@/components/wiznews/NewsArea';
import NewsSearch from '@/components/wiznews/NewsSearch';

export default function WizNews() {
  return (
    <>
      <div className="w-full flex justify-center  bg-[url('/images/mainBg.png')] bg-cover relative overflow-hidden">
        <Mascot src="svgs/newsMascot/ddory.svg" location="left" />
        <Mascot src="svgs/newsMascot/vic.svg" location="right" />
        <section className="w-3/4 flex flex-col justify-center items-center z-10">
          <NewsSearch />
          <NewsArea />
        </section>
      </div>
    </>
  );
}
