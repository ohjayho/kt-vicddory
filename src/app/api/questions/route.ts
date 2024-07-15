import { NextRequest, NextResponse } from 'next/server';
import { TQuestionHandlerProps } from '@/types';

export async function GET(req: NextRequest) {
  try {
    const response = await fetch(`${process.env.TEST_QUESTIONS_API_URL}`, {
      method: 'POST',
    });
    const questions: TQuestionHandlerProps[] = await response.json();
    return NextResponse.json(questions, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch questions' }, { status: 500 });
  }
}