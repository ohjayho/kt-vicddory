import ProgressBar from '@/components/test/ProgressBar';
import TestAnswer from '@/components/test/TestAnswer';

export default async function Questions() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const progress = 20;
  return (
    <>
      <div className="flex justify-center flex-col items-center h-dvh max-w-md m-auto">
        <div className="w-full h-1/2 bg-[#F8A6A7] flex flex-col  items-center">
          <div className='mt-7 mb-28'>
            <ProgressBar progress={progress} />
          </div>
          <h1 className="text-5xl font-bold text-[#333333]">Q1</h1>
          <h2 className="mt-4 text-center w-72 text-2xl font-semibold text-[#333333]">
            야구를 할 때,
            <br />
            당신이 가지고 싶은 능력은?
          </h2>
        </div>
        <div className="w-full h-1/2 bg-slate-50 flex flex-col justify-center items-center text-center">
          <div className="my-12">
            <TestAnswer>상대 타자를 제압하는 강력한<br />투구력</TestAnswer>
            <TestAnswer>결정적인 상황에서 홈런을 치는<br />타격력</TestAnswer>
          </div>
          <div className="px-4 w-full flex justify-between text-[#444444] font-semibold text-base">
            <button>{'<'} 뒤로</button>
            <div>1 / 10</div>
          </div>
        </div>
      </div>
    </>
  );
}
