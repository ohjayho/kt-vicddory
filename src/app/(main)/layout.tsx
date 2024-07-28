import Header from '@/components/Header';

export default function MainLayout({
  children,
  modal,
  questions,
  result,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  questions: React.ReactNode;
  result: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      {modal}
      {questions}
      {result}
    </>
  );
}
