import Image from 'next/image';

export default function NewsSearch() {
  return (
    <>
      <div className="flex justify-between w-[480px]">
        <Image src="/svgs/emblem.svg" alt="KT emblem" width={35} height={30} />
        <input
          type="text"
          name=""
          id=""
          className="font-['DungGeunMo'] w-[436px] px-3 rounded-xl"
          placeholder="KT 위즈, 김민 선수, 수원 케이티 위즈 파크"
        />
      </div>
    </>
  );
}
