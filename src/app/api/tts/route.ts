import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();
    const response = await fetch(`${process.env.API_URL}/synthesize`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    const audioData = await response.arrayBuffer();
    return new NextResponse(new Uint8Array(audioData), {
      headers: {
        'Content-Type': 'audio/mpeg', // Ensure correct content type
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch audio URL' },
      { status: 500 },
    );
  }
}
