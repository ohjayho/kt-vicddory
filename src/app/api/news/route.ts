import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const response = await fetch(`${process.env.API_URL}/news_list`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const news = await response.json();
    return NextResponse.json(news.data.list, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 },
    );
  }
}
