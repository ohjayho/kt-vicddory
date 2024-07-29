import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const day_num = searchParams.get('day_num');

  try {
    const response = await fetch(`${process.env.API_URL}/crawl_today_info`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ day_num }),
      cache: 'no-store',
    });

    const data = await response.json();
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    throw new Error('Server-Failed to fetch starting Data');
  }
}
