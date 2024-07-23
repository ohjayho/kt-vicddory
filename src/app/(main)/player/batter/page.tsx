'use client';
import { useRouter } from 'next/navigation';

export default function BatterMain() {
  const router = useRouter();
  router.replace('/player/batter/catcher');
  return null;
}
