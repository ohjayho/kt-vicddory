import Header from '@/components/Header';
import ModalWrapper from '@/components/test/ModalWrapper';

export default function MainLayout({
  children,
  modal,
  questions,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  questions: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      {modal && <ModalWrapper>{modal}</ModalWrapper>}
      {questions}
    </>
  );
}
