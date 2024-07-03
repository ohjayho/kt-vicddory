import Image from 'next/image';

export default function Mascot({
  src,
  location,
}: {
  src: string;
  location: 'left' | 'right';
}) {
  const setLocation = location === 'left' ? 'left-0' : 'right-0';
  return (
    <>
      <Image
        src={src}
        alt="mascot_ddory"
        width={300}
        height={30}
        className={`absolute -bottom-10 ${setLocation}`}
      />
    </>
  );
}
