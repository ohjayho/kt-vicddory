import Header from '@/components/Header';
import ModalWrapper from '@/components/test/ModalWrapper';

export default function MainLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      {modal && <ModalWrapper>{modal}</ModalWrapper>}
    </>
  );
}