import { ReactNode } from 'react';

export default function TestLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="bg-slate-100">{children}</div>
    </>
  );
}
