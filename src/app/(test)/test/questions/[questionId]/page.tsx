import ProgressBar from '@/components/test/ProgressBar';
import TestAnswer from '@/components/test/TestAnswer';

export default function Questions() {
  const progress = 20;
  return (
    <>
      <div className="flex justify-center flex-col items-center h-[100vh]">
        <div className="w-[375px] h-80 bg-[#F8A6A7] flex flex-col justify-center items-center text-center">
          <ProgressBar progress={progress} />
          <h1 className="mt-12 text-[39px] font-bold">Q1</h1>
          <h2 className="mt-4 text-center w-[247px] h[187px] text-[19px] font-semibold">
            야구를 할 때,
            <br />
            당신이 가지고 싶은 능력은?
          </h2>
        </div>
        <div className="w-[375px] h-[347px] bg-slate-50 flex flex-col justify-center items-center text-center">
          <div className="mb-14">
            <TestAnswer>상대 타자를 제압하는 강력한 투구력</TestAnswer>
            <TestAnswer>결정적인 상황에서 홈런을 치는 타격력</TestAnswer>
          </div>
          <div className="px-3 w-full flex justify-between text-[#444444] font-semibold text-[14px]">
            <button>{'<'} 뒤로</button>
            <div>1 / 10</div>
          </div>
        </div>
      </div>
    </>
  );
}
