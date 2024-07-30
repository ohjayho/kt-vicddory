'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

const KakaoShare = () => {
  const shareUrl =
    typeof window !== 'undefined' ? `${process.env.BASE_URL}/test` : '';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { Kakao } = window;

      if (!Kakao.isInitialized()) {
        Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
      }
    }
  }, []);

  const handleShare = () => {
    const { Kakao } = window;

    Kakao.Share.sendDefault({
      objectType: 'text',
      text: '나와 잘 맞는 ktwiz 선수 알아보러 가기!',
      link: {
        mobileWebUrl: shareUrl,
        webUrl: shareUrl,
      },
    });
  };

  return (
    <div onClick={handleShare}>
      <Image
        className="cursor-pointer"
        src="/svgs/test/result/kakao.svg"
        alt="카카오톡 공유 이미지"
        width={56}
        height={56}
      />
    </div>
  );
};

export default KakaoShare;
