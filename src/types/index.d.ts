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
  TGrapeProps,
  TCustomCSSProperties,
  TMatchTeamProps,
  TEmblemSrc,
};
