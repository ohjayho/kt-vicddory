'use client';

export default function UrlCopy() {
  const testUrl: string = 'http://localhost:3000/test';
  navigator.clipboard.writeText(testUrl);
  alert('링크가 복사 되었습니다.');

  return null;
}
