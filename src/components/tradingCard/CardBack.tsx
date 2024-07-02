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
      {/* 카드 앞면 */}
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
        <div className="absolute inset-0 flex justify-end p-6 text-white text-sm font-bold right-3 bottom-0">
          <div className="flex justify-end items-center space-x-4 pt-1 pr-5">
            {/* 선수 이름 */}
            <div className="">
              {/* 선수 국문 이름 */}
              <div className="text-2xl leading-relaxed text-right pl-8 pt-1">
                {player.korName}
              </div>
              {/* 선수 영문 이름 */}
              <div className="font-bold pt-3">{player.engName}</div>
            </div>
            {/* 포지션 */}
            <div className="">
              {/* 포지션 맵 */}
              <div className="">
                {' '}
                <img
                  src={`/images/player/position/${player.positionImg}`}
                  alt={`${player.positionImg} Image`}
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
            {/* 선수 정보 */}
            <div className="">
              <div className="">
                <div className="">생년월일:</div>
                <div className="">{player.playerDOB}</div>
              </div>
              <div className="">
                <div className="">체격:</div>
                <div className="">{`${player.playerHeight}cm, ${player.playerWeight}kg`}</div>
              </div>
              <div className="">
                <div className="">프로데뷔:</div>
                <div className="">{`${player.debutYear}년`}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[178px] h-[80px] absolute inset-0 flex justify-end p-6 text-white text-xs bg-zinc-300/opacity-50 rounded-[5px]"></div>
      </div>
    </>
  );
};

export default CardBack;
