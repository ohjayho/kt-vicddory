type TGrapeProps = {
  title: string;
  homeScore: string;
  awayScore: string;
};

export default function Graph({ title, homeScore, awayScore }: TGrapeProps) {
  const parseScore = (score: string) =>
    score.includes('%') ? parseFloat(score) / 100 : parseFloat(score);

  const homePercent = parseScore(homeScore) * 100;
  const awayPercent = parseScore(awayScore) * 100;

  return (
    <>
      <div className="flex w-[73%] justify-center items-center gap-5">
        <div className="w-full flex justify-end border rounded-md">
          <div
            className="h-8 bg-red-80 rounded-md relative"
            style={{ width: `${homePercent}%` }}
          >
            <p className="absolute right-1 top-1">{homeScore}</p>
          </div>
        </div>
        <p className="whitespace-nowrap">{title}</p>
        <div className="w-full border rounded-md">
          <div
            className="h-8 bg-[#6D6D6D] rounded-md relative"
            style={{ width: `${awayPercent}%` }}
          >
            <p className="absolute left-1 top-1">{awayScore}</p>
          </div>
        </div>
      </div>
    </>
  );
}
