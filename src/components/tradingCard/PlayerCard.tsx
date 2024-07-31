'use client';

import CardFront from '@/components/tradingCard/CardFront';
import CardBack from '@/components/tradingCard/CardBack';
import { IPlayerBack } from '@/types';
import { useState, useEffect, useRef } from 'react';

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
// 카드 위에 마우스 올리면 카드가 회전하는 코드
const useTiltEffect = (isFlipped: boolean) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = cardRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (container) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateY = 0.1 * ((-1 / 5) * x + 20);
        const rotateX = 0.1 * ((4 / 30) * y - 20);
        container.style.transform = `perspective(350px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
      }
    };

    const handleMouseLeave = () => {
      if (container) {
        container.style.transform =
          'perspective(350px) rotateY(0deg) rotateX(0deg)';
      }
    };

    if (container && !isFlipped) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isFlipped]);

  return cardRef;
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

  const cardRef = useTiltEffect(isFlipped);
  useEffect(() => {
    if (checkSpin) {
      setIsSpin(false);
    }
  }, [checkSpin]);

  return (
    <>
      <div className="">
        <div
          className={`group ${photoSize} perspective:1000px`}
          onClick={handleImageClick}
        >
          <div
            className={`relative transition-all duration-700 [transform-style:preserve-3d] ${
              isFlipped ? '[transform:rotateY(180deg)]' : ''
            } ${isSpin ? '[transform:rotateY(1080deg)]' : ''}`}
          >
            <div
              className={`${sizeClass} absolute inset-0 object-cover [backface-visibility:hidden]`}
              ref={cardRef}
            >
              <CardFront
                player={player}
                size={size}
                onClick={() => handleImageClick()}
              />
            </div>
            <div
              className={`${sizeClass} absolute inset-0 object-cover [transform:rotateY(180deg)] [backface-visibility:hidden]`}
            >
              <CardBack player={player} size={size} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
