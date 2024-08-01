import Graph from '@/components/ranking/Graph';
import MatchTeam from '@/components/ranking/MatchTeam';
// import dateFormat from '@/utils/dateFormat';
import winlossData from '#/data/winlossdata.json';
import july_schedule from '#/data/july_schedule.json';
import Image from 'next/image';

import {
  TGameData,
  TGameInfo,
  TGamePredictData,
  TPitcherData,
  TPitcherRecord,
  TTeamRecord,
  TWinLossData,
} from '@/types';

export default async function RankingAi() {
  const julyScheduleJSON: { [key: string]: number } = july_schedule;
  const winlossDataJSON: TWinLossData = winlossData;
  const koreaTime = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' }),
  );
  const today = koreaTime.toISOString().split('T')[0].split('-').join('');
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const yearmonth = year + '0' + month;

  const dayOfWeek = koreaTime.getDay();
  const day_num: number = julyScheduleJSON[today];

  let todayGame: TPitcherRecord | null = null;
  let stadiums: string[] = [];
  let teamScore: string[] = [];
  let total: number = 0;
  let last: number = 0;
  let winPercent: number = 0;
  let pitcher: string[] = [];
  let team: string[] = [];

  if (dayOfWeek !== 1) {
    const pitcherRes: Response = await fetch(
      `${process.env.BASE_URL}/api/startingPitcher?day_num=${day_num}`,
      { cache: 'no-store' },
    );
    const pitcherData: TPitcherData = await pitcherRes.json();

    todayGame = pitcherData['선발투수']['선발'];
    team = Object.keys(todayGame);
    pitcher = Object.values(todayGame);

    const score: TTeamRecord = pitcherData['상대전적']['정규시즌전적'];
    teamScore = Object.values(score);

    // 오늘 경기장 API
    const gaemRes: Response = await fetch(
      `${process.env.BASE_URL}/api/todayGame?yearmonth=${yearmonth}`,
    );
    const gameData: TGameData = await gaemRes.json();

    const gameDetail: TGameInfo[] = gameData.list.filter(
      (item: TGameInfo): boolean => {
        const gameDate: string = item.gameDate.toString();
        return (
          gameDate === today && (item.home === 'KT' || item.visit === 'KT')
        );
      },
    );
    stadiums = gameDetail.map((item: TGameInfo): string => item.stadium);

    // 전체 승률 및 예상 승률
    total = +winlossDataJSON.total[team[1]].winningPercentage;
    last = +winlossDataJSON.recent[team[1]].winningPercentage;

    // 승리 예측 API
    const gamePredict: Response = await fetch(
      `${process.env.BASE_URL}/api/predict?opponentTeam=${team[1]}&pastWinRate=${total}&recentWinRate=${last}&stadiumInformatio=${stadiums}&startingPitcherInformation=${pitcher[1]}&weather=`,
      { cache: 'no-store' },
    );
    const gamePredictData: TGamePredictData = await gamePredict.json();
    winPercent = parseInt(gamePredictData.toString().replace('%', ''));
  }

  return (
    <>
      <div className="flex flex-1 bg-[url('/images/mainBg.png')] bg-cover relative items-center overflow-hidden no-scrollbar">
        <div className="w-3/4 mx-auto text-white">
          {dayOfWeek === 1 || !todayGame ? (
            <div className="flex flex-col justify-center items-center font-semibold text-xl gap-4 h-3/4 max-sm:gap-0">
              <div className="flex justify-center h-64 mb-4 max-sm:h-1/4">
                <Image
                  src="/svgs/wiznews/newsMascot/ddory.svg"
                  alt="ticket"
                  width={0}
                  height={0}
                  className="w-auto h-[100%] "
                />
                <Image
                  src="/svgs/wiznews/newsMascot/vic.svg"
                  alt="ticket"
                  width={0}
                  height={0}
                  className="w-auto h-[100%]"
                />
              </div>
              <p>오늘은 경기가 없습니다</p>
              <p>다음 경기를 기대해주세요!</p>
            </div>
          ) : (
            <>
              <div className="flex justify-center items-center gap-12 mt-24 max-sm:gap-6 max-sm:mt-10">
                <MatchTeam teamName="KT" score={teamScore[0]} />
                <div className="text-center">
                  <h1 className="text-7xl text-[#B3B3B3] font-extrabold max-sm:text-4xl">
                    VS
                  </h1>
                  <p className="mt-4 text-xl max-sm:text-base whitespace-nowrap">
                    {stadiums}
                  </p>
                </div>
                <MatchTeam teamName={team[1]} score={teamScore[1]} />
              </div>
              <div className="flex flex-col justify-center items-center gap-8 mt-11">
                <Graph
                  title="전체 승률"
                  homeScore={total.toFixed(3)}
                  awayScore={(1 - total).toFixed(3)}
                />
                <Graph
                  title="최근 승률"
                  homeScore={last.toFixed(3)}
                  awayScore={(1 - last).toFixed(3)}
                />
                <Graph
                  title="예상 승률"
                  homeScore={`${winPercent}%`}
                  awayScore={`${100 - winPercent}%`}
                />
                <div className="flex w-full justify-center items-center gap-5 pb-16">
                  <p className="w-full text-end max-sm:text-sm">{pitcher[0]}</p>
                  <p className="whitespace-nowrap">선발 투수</p>
                  <p className="w-full max-sm:text-sm">{pitcher[1]}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
