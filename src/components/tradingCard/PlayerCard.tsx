'use client';

import CardFront from '@/components/tradingCard/CardFront';
import CardBack from '@/components/tradingCard/CardBack';
import { IPlayerFront, IPlayerBack } from '@/types';
import { useState, useEffect } from 'react';
const playerData = [
  {
    korName: '강현우',
    engName: 'Kang Hyun Woo',
    backNum: '55',
    playerImg: 'kt11.png',
    positionKor: '투수',
    positionEng: 'Pitcher',
    positionHitType: '우수우타',
    positionImg: 'pitcher.png',
    playerDOB: '1999.04.14',
    playerHeight: 185,
    playerWeight: 88,
    debutYear: 2018,
  },
];

const playerDataFront = [
  { korName: '강현우', backNum: '55', playerImg: 'pitcher/고영표.jpg' },
];

interface PlayerCardProps {
  player: IPlayerBack;
  size?: 'small' | 'medium' | 'large';
  checkSpin: boolean;
}

const sizeClasses = {
  small: 'w-48 h-72', // character test
  medium: 'w-[252px] h-[348px]', // list
  large: 'w-[360px] h-[500px]', // detail page
};
const photoSizes = {
  small: '',
  medium: 'w-[228px] h-[316px]',
  large: 'w-[370px] h-[520px]',
};
const PlayerCard: React.FC<PlayerCardProps> = ({
  size = 'medium',
  checkSpin,
}: {
  size?: 'small' | 'medium' | 'large';
  checkSpin: boolean;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSpin, setIsSpin] = useState(false);

  const sizeClass = sizeClasses[size];
  const photoSize = photoSizes[size];
  console.log(size);
  const handleImageClick = () => {
    setIsFlipped(!isFlipped);
  };
  useEffect(() => {
    if (checkSpin) {
      setIsSpin(false);
    }
  }, [checkSpin]);

  return (
    <>
      <div className="">
        <div
          className={`group ${photoSize} [perspective:1000px`}
          onClick={handleImageClick}
        >
          <div
            className={`relative transition-all duration-700 [transform-style:preserve-3d] ${
              isFlipped ? '[transform:rotateY(180deg)]' : ''
            } ${isSpin ? '[transform:rotateY(1080deg)]' : ''}`}
          >
            <div
              className={`${sizeClass} absolute inset-0 object-cover [backface-visibility:hidden]`}
            >
              {playerDataFront.map((player, index) => (
                <CardFront
                  key={index}
                  player={player}
                  size={size}
                  onClick={() => handleImageClick()}
                />
              ))}
            </div>
            <div
              className={`${sizeClass} absolute inset-0 object-cover [transform:rotateY(180deg)] [backface-visibility:hidden]`}
            >
              {playerData.map((player, index) => (
                <CardBack key={index} player={player} size={size} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerCard;
