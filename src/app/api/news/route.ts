import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const searchMax = searchParams.get('searchMax');
  const pageNum = searchParams.get('pageNum');
  // console.log(searchMax, pageNum, 'params test');
  try {
    const response = await fetch(
      `${process.env.API_URL}/news_list?searchmax=${searchMax}&page=${pageNum}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      },
    );

    const news = await response.json();
    return NextResponse.json(news.data.list, { status: 200 });
  } catch (error) {
    throw new Error('Server-Failed to fetch News Data');
  }
}
