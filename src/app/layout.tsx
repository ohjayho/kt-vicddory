import Script from 'next/script';
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  metadataBase: new URL('https://kt-vicddory-fe.vercel.app/'),
  title: { template: '%s | kt wiz', default: 'WINNING KT : 빅또리' },
  description:
    'kt wiz에서 팬들을 위한 특별 이벤트와 콘텐츠를 즐겨보세요. 야구를 좋아하지 않아도 즐길 수 있는 다양한 즐길거리가 가득!',
  icons: {
    icon: '/favicon.png',
  },
};

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-['NanumSquareNeo']">{children}</body>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
        strategy="afterInteractive"
      />
    </html>
  );
}
