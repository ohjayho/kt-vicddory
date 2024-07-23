import Image from 'next/image';

export default function Main() {
  return (
    <>
      <Image
        src="/images/main.png"
        alt="main Image"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </>
  );
}
