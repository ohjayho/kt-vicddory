'use client';

import dynamic from 'next/dynamic';
import { TPositionStatisticProps } from '@/types';
import { useRef, useEffect, useState } from 'react';
import positionDetails from '@/data/positionDetails';
import useCaptureResult from '@/utils/useCaptureResult';
import { usePathname, useRouter } from 'next/navigation';
import CaptureArea from '@/components/test/result/CaptureArea';
import ModalTestWrapper from '@/components/test/ModalTestWrapper';

const Button = dynamic(() => import('@/components/test/Button'), {
  ssr: false,
});
const ResultPosition = dynamic(
  () => import('@/components/test/result/ResultPosition'),
  { ssr: false },
);
const TestShare = dynamic(() => import('@/components/test/result/TestShare'), {
  ssr: false,
});

const Page: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [statistics, setStatistics] = useState<TPositionStatisticProps[]>([]);
  const handleCapture = useCaptureResult(ref);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const [playerHref, setPlayerHref] = useState<string>('/');

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!isModalOpen) {
      router.push('/');
    }
  }, [isModalOpen, router]);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await fetch('/api/positionStatistics');
        if (response.ok) {
          const data: TPositionStatisticProps[] = await response.json();
          setStatistics(data);
        } else {
          console.error('Failed to fetch position statistics');
        }
      } catch (error) {
        console.error('Failed to fetch position statistics', error);
      }
    };

    fetchStatistics();
    sessionStorage.removeItem('testResult');
  }, []);

  const handlePlayerHrefChange = (href: string) => {
    setPlayerHref(href);
  };

  return (
    <>
      {pathname === '/testResultModal' ? (
        <ModalTestWrapper>
          <div className="bg-slate-100 h-full overflow-scroll no-scrollbar">
            <div className="flex justify-center flex-col items-center w-[448px] m-auto relative">
              <CaptureArea
                ref={ref}
                closeModal={closeModal}
                onPlayerHrefChange={handlePlayerHrefChange}
              />
              <div className="w-full h-[1900px] bg-[#F8A6A7] relative flex flex-col justify-center items-center">
                <div className="absolute text-[#333333] font-bold top-10">
                  가장 많은 포지션은 뭘까요?
                </div>
                {statistics.map((stat, index) => {
                  const details = positionDetails[stat.position];
                  return (
                    <ResultPosition
                      key={index}
                      {...details}
                      ranking={index + 1}
                      ratio={parseFloat(stat.percentage)}
                    />
                  );
                })}
              </div>
              <div className="w-full h-[250px] bg-[#FFFFFF] flex flex-col justify-center items-center">
                <Button width={80} text="2xl" href="/test">
                  테스트 다시하기
                </Button>
                <div className="text-xl font-bold mt-10 mb-3">
                  <span className="text-red-100">테스트</span>
                  <span className="text-[#333333]">공유하기</span>
                </div>
                <TestShare onClick={handleCapture} />
              </div>
              <div className="sticky bottom-0 w-full h-20 bg-[#FFFFFF] flex justify-center items-center pb-6">
                <Button width={80} text="2xl" href={playerHref}>
                  👉🏻선수 알아보러 가기👈🏻
                </Button>
              </div>
            </div>
          </div>
        </ModalTestWrapper>
      ) : null}
    </>
  );
};

export default Page;
