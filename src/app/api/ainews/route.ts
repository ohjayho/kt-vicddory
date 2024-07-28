import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const date = searchParams.get('date');
  try {
    const response = await fetch(
      `${process.env.API_URL}/generate_news?date=${date}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      },
    );

    const aiNews = await response.json();
    return NextResponse.json(aiNews, { status: 200 });
  } catch (error) {
    throw new Error('Server-Failed to fetch aiNews Data');
  }
}
