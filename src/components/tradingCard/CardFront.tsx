import React from 'react';

interface IPitcher {
  korName: string;
  engName: string;
  backNum: number;
  playerImg: string;
}

interface CardFrontProps {
  player: IPitcher;
  size?: 'small' | 'medium' | 'large';
}

const sizeClasses = {
  small: 'w-48 h-72', // character test
  medium: 'w-[252px] h-[348px]', // list
  large: 'w-80 h-120', // detail page
};

const CardFront: React.FC<CardFrontProps> = ({ player, size = 'medium' }) => {
  const sizeClass = sizeClasses[size];
  return (
    <>
      {/* 카드 앞면 */}
      <div
        className={`bg-black rounded-lg overflow-hidden relative m-4 shadow-lg items-center justify-center transform transition-transform ${sizeClass}`}
      >
        {/* 선수 이미지 */}
        <div className="relative w-[228px] h-[316px] mx-auto">
          <img
            src={`/images/playerCardFront/${player.playerImg}`}
            alt={`${player.korName} Image`}
            className="absolute left-0 top-3 w-full h-full object-cover rounded-2xl"
          />
        </div>
        {/*프레임 이미지*/}
        <div className="absolute inset-0">
          <img
            src={'/images/frontCardFrame.png'}
            alt={'Front Card Frame'}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white text-sm font-extrabold right-3 bottom-0">
          {/* 선수 번호 */}
          <div className="leading-5 text-right text-lg ">{`No. ${player.backNum}`}</div>
          <div className="flex justify-end items-center space-x-4 pt-1 pr-5">
            {/* 선수 국문 이름 */}
            <div className="text-2xl leading-relaxed text-right pl-8 pt-1">
              {player.korName}
            </div>
            {/* 선수 영문 이름
            <div className="font-bold pt-3">{player.engName}</div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardFront;
