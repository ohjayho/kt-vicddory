'use client'

import ProgressBar from '@/components/test/ProgressBar';
import TestAnswer from '@/components/test/TestAnswer';
import { IoIosArrowBack } from "react-icons/io";
import { TQuestionHandlerProps } from '@/types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loading from '../../loading';

type TQuestionsProps = {
  params: {
    questionId: string;
  };
};

export default function Questions({ params }: TQuestionsProps) {
  const router = useRouter();
  const [questions, setQuestions] = useState<TQuestionHandlerProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuestionsFromApi() {
      try {
        const response = await fetch('/api/questions');
        if (response.ok) {
          const data = await response.json();
          setQuestions(data);
        } else {
          console.error('Failed to fetch questions');
        }
      } catch (error) {
        console.error('Failed to fetch questions', error);
      }
      setLoading(false);
    }
    fetchQuestionsFromApi();
  }, []);

  if(loading) {
    return <Loading />;
  }

  const questionIndex = parseInt(params.questionId, 10) - 1;
  const question = questions[questionIndex];
  const totalQuestions = questions.length;

  const handleAnswer = (answer: string) => {
    if(questionIndex < totalQuestions -1) {
      router.push(`/test/questions/${questionIndex + 2}`);
      console.log(answer);
    } else {
      router.push('/test/result');
    }
  };

  const progress = (questionIndex + 1) / totalQuestions * 100

  return (
    <>
      <div className="flex justify-center flex-col items-center h-dvh max-w-md m-auto">
        <div className="w-full h-1/2 bg-[#F8A6A7] flex flex-col  items-center">
          <div className='mt-7 mb-28'>
            <ProgressBar progress={progress} />
          </div>
          <h1 className="text-5xl font-bold text-[#333333]">Q{questionIndex + 1}</h1>
          <h2 className="mt-4 text-center w-72 text-2xl font-semibold text-[#333333]">
            {question.Q}
          </h2>
        </div>
        <div className="w-full h-1/2 bg-slate-50 flex flex-col justify-center items-center text-center">
          <div className="my-12">
            <TestAnswer onClick={() => handleAnswer(question.P1)}>{question.A1}</TestAnswer>
            <TestAnswer onClick={() => handleAnswer(question.P2)}>{question.A2}</TestAnswer>
          </div>
          <div className="px-4 w-full flex justify-between text-[#444444] font-semibold text-base">
            <button className='flex flex-row justify-center items-center' onClick={() => router.back()}><IoIosArrowBack /> 뒤로</button>
            <div>{questionIndex + 1} / {totalQuestions}</div>
          </div>
        </div>
      </div>
    </>
  );
}