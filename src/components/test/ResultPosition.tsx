import Image from "next/image";
import Balloon from "./Balloon";

type TResultPositionProps = {
  text: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function ResultPosition ({ text, src, alt, width, height }: TResultPositionProps) {
  return (
    <>
      <div className="relative flex justify-center items-center w-full h-72">
              <div>
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="absolute left-10 bottom-10"
              />
              <Image
                src="/svgs/test/ball.svg"
                alt="ball"
                width={183}
                height={181}
                className="absolute right-14 bottom-16 opacity-85"
              />
              </div>
              <Balloon className="absolute h-20 bottom-20">{text}</Balloon>
            </div>
    </>
  )
}