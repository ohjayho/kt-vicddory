'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RankingMain() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/ranking/ai');
  }, []);

  return null;
}
