import { useRouter } from 'next/navigation';

type TBackButtonProps = {
  positionArr: string[];
  setPositionArr: any;
};

export default function BackButton({
  positionArr,
  setPositionArr,
}: TBackButtonProps) {
  const router = useRouter();

  const onBackClick = () => {
    router.back();
    const back = positionArr.slice(0, -1);
    setPositionArr(back);
    sessionStorage.setItem('positionArr', JSON.stringify(back));
  };

  return (
    <>
      <button
        className="flex flex-row justify-center items-center"
        onClick={onBackClick}
      >
        {'<'} 뒤로
      </button>
    </>
  );
}
