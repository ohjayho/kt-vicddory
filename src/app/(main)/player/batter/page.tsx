'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function BatterMain() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/player/batter/catcher');
  }, []);
  return null;
}
