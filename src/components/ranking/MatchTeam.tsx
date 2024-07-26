import { TEmblemSrc, TMatchTeamProps } from '@/types';
import Image from 'next/image';

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
    삼성: '/svgs/teamEmblem/samsung.svg',
  };

  const [ranking, ...detail] = score.split(' ');
  const detailScore = detail.join(' ').replace(/^\(|\)$/g, '');

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="w-[200px] h-[180px] flex justify-center items-center max-sm:w-24 max-sm:h-24">
          <Image
            src={emblemSrc[teamName]}
            alt={`${teamName} emblem`}
            width={200}
            height={200}
          />
        </div>
        <p className="text-4xl font-extrabold mt-7 max-sm:text-2xl max-sm:mt-4">
          {teamName}
        </p>
        <div className="flex mt-3 text-xl max-sm:text-base max-sm:flex-col max-sm:justify-center max-sm:items-center">
          <span>{ranking}</span>
          <p className="mx-2 max-sm:hidden"> · </p>
          <span className="max-sm:whitespace-nowrap">{detailScore}</span>
        </div>
      </div>
    </>
  );
}
