import React, { useEffect, useRef } from 'react';
import { IPlayerFront } from '@/types';
// import PlayerCardProps from '@/components/tradingCard/PlayerCard';
interface CardFrontProps {
  player: IPlayerFront;
  size?: 'small' | 'medium' | 'large';
}

const sizeClasses = {
  small: 'w-48 h-72', // character test
  medium: 'w-[252px] h-[348px]', // list
  large: 'w-[360px] h-[500px]', // detail page
};

const photoSizes = {
  small: 'w-40 h-60',
  medium: 'w-[228px] h-[316px]',
  large: 'w-[326px] h-[454px]',
};

const textBoxes = {
  small: 'right-1 bottom-0',
  medium: 'right-3 bottom-0',
  large: 'right-6 bottom-5',
};

const numberFonts = {
  small: 'text-sm',
  medium: 'text-base',
  large: 'text-xl',
};

const nameBoxes = {
  small: 'pt-0 pb-0',
  medium: 'pt-1.5 pb-1 pr-4',
  large: 'pt-4 pr-6',
};

const korNameFonts = {
  small: 'text-lg',
  medium: 'text-xl',
  large: 'text-3xl',
};
const CardFront: React.FC<CardFrontProps> = ({ player, size = 'medium' }) => {
  const sizeClass = sizeClasses[size];
  const photoSize = photoSizes[size];
  const textBox = textBoxes[size];
  const numberFont = numberFonts[size];
  const nameBox = nameBoxes[size];
  const korNameFont = korNameFonts[size];
  // 카드 위에 마우스 올리면 카드가 회전하는 코드
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = cardRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (container) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateY = (-1 / 5) * x + 20;
        const rotateX = (4 / 30) * y - 20;
        container.style.transform = `perspective(350px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
      }
    };

    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <>
      <div>
        {/* 홀로그램 이미지 */}
        <div
          className={`hidden absolute ${sizeClass} inset-x bg-hologram-gradient brightness-110 opacity-80 mix-blend-color-dodge bg-cover bg-[150%_150%] transition-all duration-100`}
          ref={cardRef}
        ></div>
        {/* 카드 앞면 */}
        <div
          className={`bg-black ${sizeClass} rounded-lg overflow-visible relative m-4 items-center justify-center transform transition-transform duration-100`}
        >
          {/* 선수 이미지 */}
          <div className={`relative ${photoSize} mx-auto`}>
            <img
              src={`/images/player/playerCardFront/${player.playerImg}`}
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
          <div
            className={`absolute inset-0 flex flex-col justify-end p-6 text-white text-sm font-extrabold ${textBox}`}
          >
            {/* 선수 번호 */}
            <div
              className={`leading-5 text-right ${numberFont}`}
            >{`No. ${player.backNum}`}</div>
            <div
              className={`flex justify-end items-center space-x-4 ${nameBox}`}
            >
              {/* 선수 국문 이름 */}
              <div
                className={`text-3xl text-right flex items-center ${korNameFont}`}
              >
                {player.korName}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardFront;
