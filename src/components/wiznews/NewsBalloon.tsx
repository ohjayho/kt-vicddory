import Link from 'next/link';

export default function NewsBalloon({
  direction,
  content,
}: {
  direction: 'left' | 'right';
  content: string;
}) {
  const position = direction === 'right' ? 'justify-end' : 'justify-start';
  const setDirection =
    direction === 'right' ? 'rounded-ee-none' : 'rounded-es-none';
  return (
    <>
      <div
        className={`flex ${position} max-lg:justify-center lg:[&:not(:first-child)]:-mt-10 max-lg:mb-5`}
      >
        <Link href="/wiznews/a" scroll={false}>
          <div
            className={`w-[400px] max-lg:w-[380px] h-[120px] rounded-[54px] ${setDirection} bg-gradient-to-br from-[#FF0000] via-[#620000] to-[#FF0000] p-2`}
          >
            <div
              className={`w-full h-full rounded-[46px] ${setDirection} bg-white flex justify-center items-center shadow-[inset_0px_6px_4px_rgba(0,0,0,0.25)]`}
            >
              <h1 className="flex items-center w-11/12 h-5/6 font-['DungGeunMo'] overflow-hidden overflow-ellipsis break-all ">
                {content}
              </h1>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
