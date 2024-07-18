import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const opponentTeam = searchParams.get('opponentTeam');
  const pastWinRate = searchParams.get('pastWinRate');
  const recentWinRate = searchParams.get('recentWinRate');
  const stadiumInformation = searchParams.get('stadiumInformation');
  const startingPitcherInformation = searchParams.get(
    'startingPitcherInformation',
  );
  try {
    const response = await fetch(`${process.env.API_URL}/predict`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        info: {
          opponentTeam,
          pastWinRate,
          recentWinRate,
          stadiumInformation,
          startingPitcherInformation,
          weather: '',
        },
      }),
    });
    const data = await response.json();
    return NextResponse.json(data.predictWinRate, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed at /api/predict' },
      { status: 500 },
    );
  }
}
