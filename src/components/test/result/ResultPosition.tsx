import { TResultPositionProps } from '@/types';
import Balloon from '../Balloon';
import ResultPositionDetails from './ResultPositionDetails';
import ResultPositionImage from './ResultPositionImage';

export default function ResultPosition({
  src,
  alt,
  width,
  left,
  text,
  description,
  tags,
  ranking,
  ratio,
}: TResultPositionProps) {
  return (
    <>
      <div className="relative flex justify-center items-center w-full h-72 mb-[-15px] mt-14">
        <ResultPositionImage src={src} alt={alt} width={width} left={left} ranking={ranking} ratio={ratio} />
        <Balloon className="absolute h-20 bottom-20">{text}</Balloon>
      </div>
      {description && tags && (
        <ResultPositionDetails description={description} tags={tags} />
      )}
    </>
  );
}