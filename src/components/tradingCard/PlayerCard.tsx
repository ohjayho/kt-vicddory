'use client';

import CardFront from '@/components/tradingCard/CardFront';
import CardBack from '@/components/tradingCard/CardBack';
import Player from '@/components/player/PlayerList';
import { useEffect, useState } from 'react';
const playerData = [
  {
    korName: '강현우',
    engName: 'Kang Hyun Woo',
    backNum: 55,
    playerImg: 'kt11.png',
    positionKor: '투수',
    positionEng: 'Pitcher',
    positionPH: '우수우타',
    positionImg: 'pitcher.png',
    playerDOB: '1999.04.14',
    playerHeight: 185,
    playerWeight: 88,
    debutYear: 2018,
  },
];

interface PlayerCardProps {
  player: Player;
  size?: 'small' | 'medium' | 'large';
}

const sizeClasses = {
  small: 'w-48 h-72', // character test
  medium: 'w-[252px] h-[348px]', // list
  large: 'w-[400px] h-[560px]', // detail page
};

const PlayerCard: React.FC<PlayerCardProps> = ({ player, size = 'large' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleImageClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <>
      <div className="">
        <div
          className="group w-[400px] h-[560px] [perspective:1000px]"
          onClick={handleImageClick}
        >
          <div
            className={`relative transition-all duration-700 [transform-style:preserve-3d] ${
              isFlipped ? '[transform:rotateY(180deg)]' : ''
            }`}
          >
            <div className="absolute inset-0 object-cover [backface-visibility:hidden]">
              {playerData.map((player, index) => (
                <CardFront key={index} player={player} size="medium" />
              ))}
            </div>
            <div className="absolute inset-0 object-cover [transform:rotateY(180deg)] [backface-visibility:hidden]">
              {playerData.map((player, index) => (
                <CardBack key={index} player={player} size="medium" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerCard;
