import { ReactNode } from 'react';

export const metadata = {
  title: '성향 테스트',
  description:
    '나의 성향과 맞는 선수를 찾는 테스트! kt wiz에서 나와 가장 잘 어울리는 선수를 찾아보세요.',
};

export default function TestLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="bg-slate-100">{children}</div>
    </>
  );
}
