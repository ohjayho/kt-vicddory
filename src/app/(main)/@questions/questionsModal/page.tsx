'use client';

import { useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import ProgressBar from '@/components/test/ProgressBar';
import TestAnswer from '@/components/test/TestAnswer';
import { TQuestionHandlerProps } from '@/types';
import ModalLoading from '@/components/test/ModalLoading';
import ModalTestWrapper from '@/components/test/ModalTestWrapper';

export default function Questions() {
  const router = useRouter();
  const [questions, setQuestions] = useState<TQuestionHandlerProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [positionArr, setPositionArr] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const pathname = usePathname();

  const closeModal = () => {
    setIsModalOpen(false);
    sessionStorage.removeItem('questions');
    sessionStorage.removeItem('positionArr');
  };

  useEffect(() => {
    if (!isModalOpen) {
      router.push('/');
    }
  }, [isModalOpen, router]);

  const fetchQuestions = useCallback(async () => {
    try {
      const cachedQuestions = sessionStorage.getItem('questions');
      if (cachedQuestions) setQuestions(JSON.parse(cachedQuestions));
      const response = await fetch('/api/questions');
      if (response.ok) {
        const data = await response.json();
        setQuestions(data);
        sessionStorage.setItem('questions', JSON.stringify(data));
      } else {
        throw new Error('Failed to fetch questions');
      }
    } catch (error) {
      throw new Error('Failed to fetch questions');
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const storedPositionArr = sessionStorage.getItem('positionArr');
    if (storedPositionArr) {
      setPositionArr(JSON.parse(storedPositionArr));
    }
    fetchQuestions();
  }, [fetchQuestions]);

  if (loading) {
    return (
      <ModalTestWrapper>
        <ModalLoading />
      </ModalTestWrapper>
    );
  }

  const totalQuestions = questions.length;
  const question = questions[currentQuestionIndex];

  const handleAnswer = async (answer: string) => {
    const updatedPositionArr = [...positionArr, answer];
    setPositionArr(updatedPositionArr);
    sessionStorage.setItem('positionArr', JSON.stringify(updatedPositionArr));

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      const response = await fetch(
        `/api/testResult?positions=${updatedPositionArr}`,
      );

      if (response.ok) {
        const result = await response.json();
        sessionStorage.setItem('testResult', JSON.stringify(result));
        router.push('/testResultModal');
      } else {
        const errorText = await response.text();
        console.error('Failed to fetch test result:', errorText);
      }
      sessionStorage.removeItem('questions');
      sessionStorage.removeItem('positionArr');
    }
    setLoading(false);
  };

  const onBackClick = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    const back = positionArr.slice(0, -1);
    console.log(back);
    setPositionArr(back);
    sessionStorage.setItem('positionArr', JSON.stringify(back));
  };

  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <>
      {pathname === '/questionsModal' ? (
        <ModalTestWrapper>
          <div className="flex justify-center flex-col items-center h-dvh max-w-md m-auto relative">
            <div className="w-full h-1/2 bg-[#F8A6A7] flex flex-col items-center">
              <button
                onClick={closeModal}
                className="absolute text-2xl right-2 top-0 text-slate-400 hover:text-black"
              >
                x
              </button>
              <div className="mt-7 mb-28">
                <ProgressBar progress={progress} />
              </div>
              <h1 className="text-5xl font-bold text-[#333333]">
                Q{currentQuestionIndex + 1}
              </h1>
              <h2 className="mt-4 text-center w-72 text-2xl font-semibold text-[#333333]">
                {question.Q}
              </h2>
            </div>
            <div className="w-full h-1/2 bg-slate-50 flex flex-col justify-center items-center text-center">
              <div className="my-12">
                <TestAnswer onClick={() => handleAnswer(question.P1)}>
                  {question.A1}
                </TestAnswer>
                <TestAnswer onClick={() => handleAnswer(question.P2)}>
                  {question.A2}
                </TestAnswer>
              </div>
              <div className="px-4 w-full flex justify-between text-[#444444] font-semibold text-base">
                <button
                  className="flex flex-row justify-center items-center"
                  onClick={onBackClick}
                >
                  {'<'} 뒤로
                </button>
                <div>
                  {currentQuestionIndex + 1} / {totalQuestions}
                </div>
              </div>
            </div>
          </div>
        </ModalTestWrapper>
      ) : null}
    </>
  );
}
