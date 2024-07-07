'use client';
import { useRouter } from 'next/navigation';
import { MouseEventHandler } from 'react';

export default function NewsContent() {
  const router = useRouter();
  const handleBacklink: MouseEventHandler<HTMLButtonElement> = () => {
    router.back();
  };
  return (
    <>
      <section className="w-[1200px] h-[700px] bg-[#0a0a0e] rounded-[5px] p-5 font-['DungGeunMo'] text-white 컨테이너">
        <div className="h-[660px] shadow-[0_0_30px_rgba(237,136,136,0.84)] bg-[url('/images/wiznews/newsPattern.png')] flex flex-col 내부컨테이너">
          <div className="h-20 bg-[rgba(0,0,0,0.44)] px-10 버튼 칸">
            <button
              className="h-full text-[#FFE974] text-2xl"
              onClick={handleBacklink}
            >
              ← 목록
            </button>
          </div>
          <div className="flex justify-between p-10 제목 칸">
            <h1 className="제목">
              “154km까지 나오더라” 감독의 감탄…선발 실패→필승 셋업맨 “마무리는
              영현이가 15년은 해야 될 선수죠”  
            </h1>
            <h3 className="날짜">2024-01-17</h3>
          </div>
          <div className="px-10 본문 칸">
            <p>
              [OSEN=잠실, 한용섭 기자]프로야구 KT 위즈 투수 김민이 불펜에서
              믿을맨 역할을 잘 수행하고 있다.KT는 21일 서울 잠실구장에서 LG와
              경기에서 3-2 역전승을 거뒀다. 김민은 선발 벤자민에 이어 2번째
              투수로 나와 1이닝 1피안타 무실점을 기록하며 승리 투수가 됐다. 2-2
              동점인 8회 등판한 김민은 대타 신민재에게 중전 안타를 허용했다.
              그러나 무사 1루에서 홍창기를 유격수 땅볼 병살타로 처리하며 주자를
              없앴다. 2사 후 김현수를 2루수 땅볼로 이닝을 마쳤다.KT는 9회초 연속
              볼넷과 1사 2,3루에서 자동 고의4구로 만루 찬스를 잡았고, 2사
              만루에서 강현우의 밀어내기 볼넷으로 결승점을 뽑았다. 마무리
              박영현이 2아웃을 잡고서 볼넷 2개를 내줬지만 1점 차 승리를
              지켜냈다.이강철 감독은 “NC전 때는 154km까지 나오더라”며 불펜에서
              김민의 공이 제일 좋다고 칭찬했다. 김민은 마무리 박영현 앞에서
              셋업맨 역할을 하고 있다.김민은 경기 후 “올 시즌 갑자기 많이 던지게
              돼 항상 마운드 올라갈 때는 감사한 마음으로 올라간다. 그냥 이
              상황에 내가 올라가는 것도 나한테 좋고, 항상 그런 생각으로 던지고
              있다”고 말했다. 이어 “나 때문에 이렇게 팀이 좀 이기니까 기쁘다.
              다른 거는 솔직히 신경 안 쓰고 있다. 원래 홀드에 신경 쓰는 선수도
              아니고, 일단 팀이 이기는 것만, 뒤로 연결만 해주는 데 신경쓴다”고
              말했다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
