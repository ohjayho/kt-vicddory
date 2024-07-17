'use client';
import Banner from '@/components/player/Banner';
import { useRouter } from 'next/navigation';

export default function BatterMain() {
  const router = useRouter();
  router.replace('/player/batter/catcher');
  return (
    <>
      <div>
        <Banner
          title="타자"
          subtitle="kt wiz의 자랑스런 ‘첫 번째 선수단’을 소개합니다"
        />
      </div>
    </>
  );
}
