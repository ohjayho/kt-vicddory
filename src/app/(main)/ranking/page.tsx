'use client';

import { useRouter } from 'next/navigation';

export default function RankingMain() {
  const router = useRouter();
  router.replace('/ranking/ai');
  return null;
}
