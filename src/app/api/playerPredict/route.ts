import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { position, player_data } = data;
    const response = await fetch(
      `${process.env.API_URL}/predict_player_stats`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          position,
          player_data,
        }),
      },
    );

    const expectedMetric = await response.json();
    return NextResponse.json(expectedMetric, { status: 200 });
  } catch (error) {
    throw new Error('Server-Failed to fetch playerPredict Data');
  }
}
