import Graph from '@/components/ranking/Graph';
import MatchTeam from '@/components/ranking/MatchTeam';
import dateFormat from '@/utils/dateFormat';
import winlossData from '#/data/winlossdata.json';
import july_schedule from '#/data/july_schedule.json';

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
  const today = dateFormat();
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const yearmonth = year + '0' + month;

  //선발투수 정보 API
  const day_num: number = julyScheduleJSON[today];

  const pitcherRes: Response = await fetch(
    `${process.env.BASE_URL}/api/startingPitcher?day_num=${day_num}`,
  );
  const pitcherData: TPitcherData = await pitcherRes.json();

  const todayGame: TPitcherRecord = pitcherData['선발투수']['선발'];
  const team: string[] = Object.keys(todayGame);
  const pitcher: string[] = Object.values(todayGame);
  const score: TTeamRecord = pitcherData['상대전적']['정규시즌전적'];
  const teamScore: string[] = Object.values(score);

  //오늘 경기장 API
  const gaemRes: Response = await fetch(
    `${process.env.BASE_URL}/api/todayGame?yearmonth=${yearmonth}`,
  );
  const gameData: TGameData = await gaemRes.json();

  const gameDetail: TGameInfo[] = gameData.list.filter(
    (item: TGameInfo): boolean => {
      const gameDate: string = item.gameDate.toString();
      return gameDate === today && (item.home === 'KT' || item.visit === 'KT');
    },
  );
  const stadiums: string[] = gameDetail.map(
    (item: TGameInfo): string => item.stadium,
  );

  //전체 승률 및 예상 승률
  const total: number = +winlossDataJSON.total[team[1]].winningPercentage;
  const last: number = +winlossDataJSON.recent[team[1]].winningPercentage;

  //승리 예측 API
  const gamePredict: Response = await fetch(
    `${process.env.BASE_URL}/api/predict?opponentTeam=${team[1]}&pastWinRate=${total}&recentWinRate=${last}&stadiumInformatio=${stadiums}&startingPitcherInformation=${pitcher[1]}&weather=`,
    { cache: 'no-store' },
  );
  const gamePredictData: TGamePredictData = await gamePredict.json();
  const winPercent = parseInt(gamePredictData.toString().replace('%', ''));

  return (
    <>
      <div className="bg-[url('/images/mainBg.png')] bg-cover relative overflow-hidden">
        <div className="w-3/4 mx-auto text-white pb-16 ">
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
            <div className="flex w-full justify-center items-center gap-5">
              <p className="w-full text-end max-sm:text-sm">{pitcher[0]}</p>
              <p className="whitespace-nowrap">선발 투수</p>
              <p className="w-full max-sm:text-sm">{pitcher[1]}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
