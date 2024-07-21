// pages/api/player/[position]/[playerId].ts
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
type Position = 'pitcher' | 'catcher' | 'infielder' | 'outfielder';

export async function POST(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const position = searchParams.get('position');
  const playerId = searchParams.get('playerId');
  if (!position || !playerId) {
    return NextResponse.json(
      { error: 'Position and Player ID are required' },
      { status: 400 },
    );
  }

  let filePath;

  switch (position) {
    case 'pitcher':
      filePath = path.join(
        process.cwd(),
        'public',
        'data',
        'playerDetail',
        'pitcher',
        `${playerId}.json`,
      );
      break;
    case 'catcher':
      filePath = path.join(
        process.cwd(),
        'public',
        'data',
        'playerDetail',
        'batter',
        'catcher',
        `${playerId}.json`,
      );
      break;
    case 'infielder':
      filePath = path.join(
        process.cwd(),
        'public',
        'data',
        'playerDetail',
        'batter',
        'infielder',
        `${playerId}.json`,
      );
      break;
    case 'outfielder':
      filePath = path.join(
        process.cwd(),
        'public',
        'data',
        'playerDetail',
        'batter',
        'outfielder',
        `${playerId}.json`,
      );
      break;
    default:
      return NextResponse.json({ error: 'Invalid position' }, { status: 400 });
  }

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'Player not found' }, { status: 404 });
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const playerData = JSON.parse(fileContents);
  interface Result {
    yearrecordlist: any;
    position: Position;
    [key: string]: any; // 인덱스 시그니처 추가
  }

  let result: Result = {
    yearrecordlist: playerData.data.yearrecordlist,
    position: position as Position,
  };
  try {
    const response = await fetch(
      `${process.env.API_URL}/predict_player_stats`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          position: position,
          yearrecordlist: playerData.data.yearrecordlist,
        }),
      },
    );

    if (!response.ok) {
      throw new Error('Failed to fetch prediction data');
    }

    const predictionData = await response.json();
    let result = {
      yearrecordlist: playerData.data.yearrecordlist,
      position: position,
    };

    const positionFields: Record<Position, string[]> = {
      pitcher: ['ERA', 'K/BB', 'WHIP', 'QS', '피안타율', 'reason'],
      catcher: ['FPCT', 'CS%', 'PB', 'rSB', 'CERA', 'reason'],
      infielder: ['BA', 'OBP', 'SLG', 'OPS', 'FPCT', 'WAR', 'reason'],
      outfielder: ['BA', 'OBP', 'SLG', 'OPS', 'FPCT', 'WAR', 'reason'],
    };

    const fields = positionFields[position as Position];

    fields.forEach((field) => {
      (result as any)[field] = predictionData[field];
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch prediction data' },
      { status: 500 },
    );
  }
}
