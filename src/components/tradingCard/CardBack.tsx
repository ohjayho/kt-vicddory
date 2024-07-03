import React from 'react';

interface IPitcherBack {
  korName: string;
  engName: string;
  playerImg: string;
  positionKor: string;
  positionEng: string;
  positionPH: string;
  positionImg: string;
  playerDOB: string;
  playerHeight: number;
  playerWeight: number;
  debutYear: number;
}

interface CardBackProps {
  player: IPitcherBack;
  size?: 'small' | 'medium' | 'large';
}

const sizeClasses = {
  small: 'w-48 h-72', // character test
  medium: 'w-[252px] h-[348px]', // list
  large: 'w-80 h-120', // detail page
};

const CardBack: React.FC<CardBackProps> = ({ player, size = 'medium' }) => {
  const sizeClass = sizeClasses[size];
  return (
    <>
      {/* 카드 뒷면 */}
      <div
        className={`bg-black rounded-lg overflow-hidden relative m-4 shadow-lg items-center justify-center transform transition-transform ${sizeClass}`}
      >
        {/* 선수 이미지 */}
        <div className="relative w-[228px] h-[136px] mx-auto">
          <img
            src={`/images/player/playerCardBack/${player.playerImg}`}
            alt={`${player.korName} Image`}
            className="absolute left-0 top-4 w-full h-full object-cover rounded-2xl"
          />
        </div>
        {/*프레임 이미지*/}
        <div className="absolute inset-0">
          <img
            src={'/images/backCardFrame.png'}
            alt={'Front Card Frame'}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative inset-0 flex p-6 text-white/80 text-sm font-bold right-2 bottom-0">
          <div className="flex flex-col bg-yellow-200/0 h-12 justify-end items-center pt-1 pr-3">
            {/* 선수 이름 */}
            <div className="bg-slate-400/0 flex flex-row justify-start itmes-end">
              {/* 선수 국문 이름 */}
              <div className="text-xl leading-relaxed text-left pr-1.5">
                {player.korName}
              </div>
              {/* 선수 영문 이름 */}
              <div className="font-bold pb-0 text-base flex items-end">
                {player.engName}
              </div>
            </div>
            {/* 포지션 */}
            <div className="bg-pink-300 ">
              {/* 포지션 맵 */}
              <div className="absolute w-[140px]">
                {' '}
                <img
                  src={`/images/player/playerPosition/${player.positionImg}`}
                  alt={`${player.positionKor} 사진`}
                  className="absolute left-0 top-4 w-full h-full object-cover rounded-0"
                />
              </div>
              <div className="">
                {/* 투타 */}
                <div className="">{player.positionPH}</div>
                {/* 포지션 국문 */}
                <div className="">{player.positionKor}</div>
                {/* 포지션 영문 */}
                <div className="">{player.positionEng}</div>
              </div>
            </div>
          </div>
        </div>
        {/* 선수 정보 박스*/}
        <div className="w-[178px] h-[80px] relative inset-0 flex flex-col justify-center items-center p-6 text-white text-xs bg-zinc-300/50 rounded-[5px]">
          <div className="flex flex-row">
            <div className="text-left">생년월일:</div>
            <div className="text-right">{player.playerDOB}</div>
          </div>
          <div className="flex flex-row">
            <div className="text-left">체격:</div>
            <div className="text-right">{`${player.playerHeight}cm, ${player.playerWeight}kg`}</div>
          </div>
          <div className="flex flex-row content-between">
            <div className="">프로데뷔:</div>
            <div className="items-end">{`${player.debutYear}년`}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBack;
