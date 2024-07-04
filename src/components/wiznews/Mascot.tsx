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
        alt="mascot_img"
        width={320}
        height={30}
        className={`absolute -bottom-16 ${setLocation}`}
      />
    </>
  );
}
