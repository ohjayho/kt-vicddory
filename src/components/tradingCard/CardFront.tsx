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
        <div className="items-center justify-center rounded-2xl w-[228px] h-[316px]">
          <img
            src={`/images/playerCardFront/${player.playerImg}`}
            alt={`${player.korName} Image`}
            className="w-full h-full object-cover"
          />
        </div>
        {/*프레임 이미지*/}
        <div className="rounded-2xl bg-frontCardFrame w-[228px] h-[316px]"></div>
        {/* 선수 번호 */}
        <div className="text-white text-sm font-extrabold leading-5">
          {player.backNum}
        </div>
        {/* 선수 국문 이름 */}
        <div className="text-white text-lg font-extrabold leading-relaxed">
          {player.korName}
        </div>
        {/* 선수 영문 이름 */}
        <div className="text-white text-sm font-bold">{player.engName}</div>
      </div>
    </>
  );
};

export default CardFront;
