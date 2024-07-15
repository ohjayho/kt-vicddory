import Graph from '@/components/ranking/Graph';
import MatchTeam from '@/components/ranking/MatchTeam';

export default function RankingAi() {
  return (
    <>
      <div className="bg-[url('/images/mainBg.png')] bg-cover relative overflow-hidden">
        <div className="w-3/4 mx-auto text-white pb-16 ">
          <div className="flex justify-center items-center gap-12 mt-24 max-sm:gap-6 max-sm:mt-10">
            <MatchTeam teamName="KT" score="7위 (38승 2무 45패)" />
            <div className="text-center">
              <h1 className="text-7xl text-[#B3B3B3] font-extrabold max-sm:text-4xl">
                VS
              </h1>
              <p className="mt-4 text-xl max-sm:text-base whitespace-nowrap">
                수원구장
              </p>
            </div>
            <MatchTeam teamName="한화" score="3위 (46승 2무 39패)" />
          </div>
          <div className="flex flex-col justify-center items-center gap-8 mt-11">
            <Graph title="과거 승률" homeScore="0.551" awayScore="0.449" />
            <Graph title="최근 승률" homeScore="0.375" awayScore="0.625" />
            <Graph title="예상 승률" homeScore="60%" awayScore="40%" />
            <div className="flex w-full justify-center items-center gap-5">
              <p className="w-full text-end max-sm:text-sm">고영표</p>
              <p className="whitespace-nowrap">선발 투수</p>
              <p className="w-full max-sm:text-sm">곽빈</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
