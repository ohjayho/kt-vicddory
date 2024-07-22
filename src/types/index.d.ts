//Test
type TResultPositionProps = {
  src: string;
  alt: string;
  width: number;
  left: number;
  text?: string;
  description?: string;
  tags?: string;
  ranking?: number;
  ratio?: number;
};

type TQuestionHandlerProps = {
  A1: string;
  A2: string;
  P1: string;
  P2: string;
  Q: string;
};

//Ranking
type TGrapeProps = {
  title: string;
  homeScore: string | number;
  awayScore: strubg | number;
};

type TCustomCSSProperties = CSSProperties & {
  '--width'?: string;
};

type TMatchTeamProps = {
  teamName: string;
  score: string;
};

type TEmblemSrc = {
  [key: string]: string;
};

type TTeamRecord = {
  '경기당 득점': string;
  '경기당 실점': string;
  구분: string;
  상대전적: string;
  '승차/최근': string;
  '원정 성적': string;
  정규시즌전적: string;
  '홈 성적': string;
};

type TPitcherRecord = {
  구분: string;
  '상대 전적(모든시즌)': string;
  선발: string;
  '시즌 성적(정규)': string;
  '최근 30일': string;
  확정: string;
};

type TPitcherData = {
  상대전적: {
    [key: string]: TTeamRecord;
  };
  선발투수: {
    [key: string]: TPitcherRecord;
  };
};

type TGameInfo = {
  broadcast: string;
  displayDate: string;
  gameDate: number;
  gmkey: string;
  gtime: string;
  home: string;
  homeKey: string;
  homeScore: number;
  matchTeamCode: string;
  matchTeamName: string;
  outcome: string;
  stadium: string;
  stadiumKey: string;
  status: string;
  visit: string;
  visitKey: string;
  visitScore: number;
};

type TGameData = {
  list: TGameInfo[];
};

type TGamePredictData = {
  string;
};

type TeamStats = {
  wins: number;
  draws: number;
  losses: number;
  winningPercentage: string;
};

type TotalStats = {
  [team: string]: TeamStats;
};

type RecentStats = {
  [team: string]: TeamStats;
};

type TWinLossData = {
  total: TotalStats;
  recent: RecentStats;
};

// Player
interface IPlayerFront {
  korName: string;
  backNum: string;
  playerFrontImg: string;
}

interface IPlayerBack extends IPlayerFront {
  engName: string;
  playerBackImg: string;
  positionKor: string;
  positionEng: string;
  positionHitType: string;
  positionImg: string;
  playerDOB: string;
  playerHeight: number;
  playerWeight: number;
  debutYear: number;
}

// Player Metric
type TPitcherMetric = {
  ERA: number;
  'K/BB': number;
  WHIP: number;
  QS: number;
  피안타율: number;
  reason: string;
};

type TCatcherMetric = {
  FPCT: number;
  'CS%': number;
  PB: number;
  rSB: number;
  CERA: number;
  reason: string;
};

type TInfielderMetric = {
  BA: number;
  OBP: number;
  SLG: number;
  OPS: number;
  FPCT: number;
  WAR: number;
  reason: string;
};

type TBatterYearRecord = {
  ab: number;
  bb: number;
  bra: string;
  cs: number;
  gamenum: number;
  gd: number;
  gyear: string;
  h2: number;
  h3: number;
  hit: number;
  hp: number;
  hr: number;
  hra: string;
  kk: number;
  rbi: number;
  run: number;
  sb: number;
  slg: string;
  teamCode: string;
  teamName: string;
}[];

type TPitcherYearRecord = {
  bb: number;
  bf: number;
  er: number;
  era: string;
  gamenum: number;
  gyear: string;
  hit: number;
  hold: number;
  hp: number;
  hr: number;
  inn2: number;
  innDisplay: string;
  kk: number;
  l: number;
  r: number;
  sho: number;
  sv: number;
  teamCode: string;
  teamName: string;
  w: number;
  wCg: number;
  wra: string;
}[];

interface IPitcherPlayerData {
  data: {
    recentgamerecordlist: any[];
    recentgamerecordlistfutures: any[];
    seasonsummary: any;
    yearrecordlist: TPitcherYearRecord[];
    seasonsummaryfutures: any;
    gameplayer: IPlayerBack;
  };
}
interface IBatterPlayerData {
  data: {
    recentgamerecordlist: any[];
    recentgamerecordlistfutures: any[];
    seasonsummary: any;
    yearrecordlist: TBatterYearRecord[];
    seasonsummaryfutures: any;
    gameplayer: IPlayerBack;
  };
}
export {
  TResultPositionProps,
  TQuestionHandlerProps,
  TGrapeProps,
  TCustomCSSProperties,
  TMatchTeamProps,
  TEmblemSrc,
  TPitcherData,
  TGameData,
  TGamePredictData,
  TPitcherRecord,
  TTeamRecord,
  TGameInfo,
  TWinLossData,
  IPlayerFront,
  IPlayerBack,
  TCatcherMetric,
  TPitcherMetric,
  TInfielderMetric,
  TBatterYearRecord,
  TPitcherYearRecord,
  IPitcherPlayerData,
  IBatterPlayerData,
};
