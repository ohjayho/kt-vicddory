import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const params = searchParams.get('params');
  try {
    const response = await fetch(
      `${process.env.API_URL}/news_detail?params=${params}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      },
    );

    const detailedNews = await response.json();
    return NextResponse.json(detailedNews.data.article, { status: 200 });
  } catch (error) {
    throw new Error('Server-Failed to fetch detailedNews Data');
  }
}
