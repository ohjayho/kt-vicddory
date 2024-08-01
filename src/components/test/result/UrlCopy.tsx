export default function UrlCopy() {
  const testUrl: string = `https://kt-vicddory-fe.vercel.app/test`;
  navigator.clipboard.writeText(testUrl);
  alert('링크가 복사 되었습니다.');

  return null;
}
