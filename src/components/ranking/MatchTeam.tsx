import Image from 'next/image';

type TMatchTeamProps = {
  teamName: string;
  score: string;
};

type TEmblemSrc = {
  [key: string]: string;
};

export default function MatchTeam({ teamName, score }: TMatchTeamProps) {
  const emblemSrc: TEmblemSrc = {
    KT: '/svgs/emblem.svg',
    두산: '/svgs/teamEmblem/doosan.svg',
    한화: '/svgs/teamEmblem/hanwha.svg',
    KIA: '/svgs/teamEmblem/kia.svg',
    키움: '/svgs/teamEmblem/kiwoom.svg',
    LG: '/svgs/teamEmblem/lg.svg',
    롯데: '/svgs/teamEmblem/lotte.svg',
    NC: '/svgs/teamEmblem/nc.svg',
    SSG: '/svgs/teamEmblem/ssg.svg',
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="w-[200px] h-[180px] flex justify-center items-center">
          <Image
            src={emblemSrc[teamName]}
            alt={`${teamName} emblem`}
            width={200}
            height={200}
          />
        </div>
        <p className="text-4xl font-extrabold mt-7">{teamName}</p>
        <p className="mt-3 text-xl">{score}</p>
      </div>
    </>
  );
}
