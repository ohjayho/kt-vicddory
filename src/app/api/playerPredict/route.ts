import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const position = searchParams.get('position');

  try {
    const response = await fetch(
      `${process.env.API_URL}/predict_player_stats?position=${position}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          position: { position },
          player_data: req.json(),
        }),
      },
    );
    const expectedMetric = await response.json();
    return NextResponse.json(expectedMetric, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 },
    );
  }
}
