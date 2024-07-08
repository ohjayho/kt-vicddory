import { TResultPositionProps } from "@/types";
import Image from "next/image";
import ResultPositionRankingContent from "./ResultPositionRankingContent";

export default function ResultPositionImage ({
  src,
  alt,
  width,
  left,
  ranking,
  ratio
}: TResultPositionProps) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={300}
        style={{ left: `${left}px`, bottom: '40px', position: 'absolute' }}
        className="w-auto h-300"
      />

      <Image
        src="/svgs/test/ball.svg"
        alt="ball"
        width={183}
        height={181}
        className="absolute right-14 bottom-16 opacity-85"
      />
      <ResultPositionRankingContent ranking={ranking} ratio={ratio} />
    </> 
  )
}