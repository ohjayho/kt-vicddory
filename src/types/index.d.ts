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
  homeScore: string;
  awayScore: string;
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

export {
  TResultPositionProps,
  TQuestionHandlerProps,
  TGrapeProps,
  TCustomCSSProperties,
  TMatchTeamProps,
  TEmblemSrc,
};
