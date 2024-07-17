import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const yearmonth = searchParams.get('yearmonth');

  try {
    const response = await fetch(`${process.env.API_URL}/fetch_schedule`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ yearmonth }),
    });
    const data = await response.json();
    return NextResponse.json(data.data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed at /api/todayGame' },
      { status: 500 },
    );
  }
}
