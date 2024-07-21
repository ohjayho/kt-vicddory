import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/libs/mongodb';

export async function POST(req: NextRequest) {
  const { positions } = await req.json();

  try {
    const client = await clientPromise;
    const db = client.db('vicddory');
    const collection = db.collection('test-results');

    const response = await fetch(`${process.env.API_URL}/evaluate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ positions }),
    });

    if (!response.ok) {
      console.error('API call failed with status:', response.status);
      return NextResponse.json({ error: 'Failed to fetch evaluation result' }, { status: response.status });
    }

    const result = await response.json();

    if (!result.position || !result.response) {
      return NextResponse.json({ error: 'Invalid evaluation result' }, { status: 500 });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Failed to save result:', error);
    return NextResponse.json({ error: 'Failed to save result' }, { status: 500 });
  }
}
