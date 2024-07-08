import Image from 'next/image';

export default function NewsSearch() {
  return (
    <>
      <div className="flex justify-between w-[480px] max-sm:w-full my-7">
        <Image
          src="/svgs/emblem.svg"
          alt="KT emblem"
          width={35}
          height={30}
          className="h-8"
        />
        <input
          type="text"
          name=""
          id=""
          className="font-['DungGeunMo'] w-[436px] max-sm:w-[90%] h-8 px-3 rounded-[10px] shadow-[inset_2px_3px_4px_rgba(0,0,0,0.25)]"
          placeholder="원하는 뉴스를 검색해 보세요! 예) KT 위즈, 김민 선수"
        />
      </div>
    </>
  );
}
