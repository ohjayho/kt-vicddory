import Link from 'next/link';

export default function NewsBalloon({
  direction,
  content,
  id,
  ai,
}: {
  direction: 'left' | 'right';
  content: string;
  id: number;
  ai: boolean;
}) {
  const position = direction === 'right' ? 'justify-end' : 'justify-start';
  const setDirection =
    direction === 'right' ? 'rounded-ee-none' : 'rounded-es-none';
  return (
    <>
      <div
        className={`flex ${position} max-lg:justify-center lg:[&:not(:first-child)]:-mt-10 max-lg:mb-5`}
      >
        <Link href={`/wiznews/${id}`} scroll={false}>
          <div
            className={`w-[400px] max-lg:w-[380px] h-[120px] rounded-[54px] ${setDirection} bg-gradient-to-br ${ai ? 'from-[#16ff2f] via-[#0b8017] to-[#16ff2f]' : 'from-[#FF0000] via-[#620000] to-[#FF0000]'} p-2 relative hover:shadow-[0_0_11px_3px_rgba(255,30,0,1)]`}
          >
            {ai && (
              <div className="absolute -top-1 w-10 flex justify-center items-center font-['DungGeunMo'] text-white text-lg bg-[#0b8017] rounded-3xl p-1">
                AI
              </div>
            )}
            <div
              className={`w-full h-full rounded-[46px] ${setDirection} bg-white flex justify-center items-center shadow-[inset_0px_6px_4px_rgba(0,0,0,0.25)]`}
            >
              <h1 className="flex items-center w-10/12 h-5/6 font-['DungGeunMo'] overflow-hidden overflow-ellipsis break-all ">
                {content}
              </h1>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
