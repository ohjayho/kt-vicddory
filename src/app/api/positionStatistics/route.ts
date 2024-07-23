import { NextResponse } from 'next/server';
import clientPromise from '@/libs/mongodb';
import { TPositionStatisticProps } from '@/types';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('vicddory');
    const collection = db.collection('test-results');

    const pipeline = [
      { $group: { _id: "$position", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $project: { _id: 0, position: "$_id", count: 1 } }
    ];

    const results = await collection.aggregate(pipeline).toArray();

    const totalCount = results.reduce((sum, item) => sum + item.count, 0);
    const statistics: TPositionStatisticProps[] = results.map(item => ({
      position: item.position,
      percentage: ((item.count / totalCount) * 100).toFixed(2)
    }));

    return NextResponse.json(statistics);
  } catch (error) {
    console.error('Failed to fetch position statistics:', error);
    return NextResponse.json({ error: 'Failed to fetch position statistics' }, { status: 500 });
  }
}