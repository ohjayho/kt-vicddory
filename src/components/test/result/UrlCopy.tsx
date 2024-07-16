'use client';

export default function UrlCopy () {
  const testUrl: string = "https://vicddory-frontend.vercel.app/test" 
  // testUrl.select();
  // testUrl.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(testUrl);
  alert("링크가 복사 되었습니다.");

  return null;
}