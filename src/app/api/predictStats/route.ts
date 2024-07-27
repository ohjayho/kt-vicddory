import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const position = searchParams.get('position');
  const yearrecordlist = searchParams.get('yearrecordlist');

  try {
    const response = await fetch(
      `${process.env.API_URL}/predict_player_stats`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          position,
          yearrecordlist,
        }),
      },
    );
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed at /api/predictStats' },
      { status: 500 },
    );
  }
}
