'use client';

import CardFront from '@/components/tradingCard/CardFront';
import CardBack from '@/components/tradingCard/CardBack';
import { IPlayerFront, IPlayerBack } from '@/types';
import { useState, useEffect } from 'react';

interface PlayerCardProps {
  player: { data: { gameplayer: IPlayerBack } };
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
export default function PlayerCard({
  player,
  size = 'medium',
  checkSpin,
}: PlayerCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSpin, setIsSpin] = useState(false);

  const sizeClass = sizeClasses[size];
  const photoSize = photoSizes[size];
  const handleImageClick = () => {
    setIsFlipped(!isFlipped);
  };
  useEffect(() => {
    if (checkSpin) {
      setIsSpin(false);
    }
  }, [checkSpin]);

  const gameplayer = player.data.gameplayer;
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
              <CardFront
                player={gameplayer}
                size={size}
                onClick={() => handleImageClick()}
              />
            </div>
            <div
              className={`${sizeClass} absolute inset-0 object-cover [transform:rotateY(180deg)] [backface-visibility:hidden]`}
            >
              <CardBack player={gameplayer} size={size} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
