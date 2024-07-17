import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const day_num = searchParams.get('day_num');

  try {
    const response = await fetch(`${process.env.API_URL}/crawl_today_info`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ day_num }),
    });
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed at /api/startingPitcher' },
      { status: 500 },
    );
  }
}
