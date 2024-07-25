import React from 'react';
import { IPlayerBack } from '@/types';
import Image from 'next/image';
interface CardBackProps {
  player: IPlayerBack;
  size?: 'small' | 'medium' | 'large';
}

const sizeClasses = {
  small: 'w-48 h-72', // character test
  medium: 'w-[252px] h-[348px]', // list
  large: 'w-[360px] h-[500px]', // detail page
};
const photoSizes = {
  small: 'w-40 h-60',
  medium: 'w-[228px] h-[136px]',
  large: 'w-[324px] h-[196px]',
};

const CardBack: React.FC<CardBackProps> = ({ player, size = 'large' }) => {
  const sizeClass = sizeClasses[size];
  const photoSize = photoSizes[size];

  if (size === 'medium') {
    return (
      <>
        {/* 카드 뒷면 */}
        <div
          className={`bg-black rounded-lg overflow-hidden relative m-4 shadow-lg items-center justify-center transform transition-transform ${sizeClass}`}
        >
          {/* 선수 이미지 */}
          <div className={`relative ${photoSize} mx-auto top-3`}>
            <Image
              src={player.playerBackImg}
              alt={`${player.korName} Image`}
              layout="fill"
              className="pt-6 object-cover rounded-2xl"
            />
          </div>
          {/*프레임 이미지*/}
          <div className="absolute inset-0">
            <Image
              src={'/images/backCardFrame.png'}
              alt={'Back Card Frame'}
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="relative inset-0 flex px-6 text-white/80 text-sm font-bold bottom-0 h-1/3 -mt-3">
            <div className="flex flex-col bg-yellow-200/0 w-full">
              {/* 선수 이름 */}
              <div className="bg-slate-400/0 flex flex-row">
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
              <div className="bg-pink-300/0 w-[178px] flex flex-col justify-items-center ml-2">
                {/* 포지션 맵 */}
                <div className="absolute ml-1 mt-1 w-[80px] h-[80px]">
                  <Image
                    src={`/images/player/playerPosition/${player.positionImg}`}
                    alt={`${player.positionKor} 사진`}
                    layout="fill"
                    className="absolute object-cover"
                  />
                </div>
                <div className="flex flex-row place-content-end items-end mt-6">
                  {/* 포지션 국문 */}
                  <p className="text-xl">{player.positionKor}</p>

                  <div className="text-right flex flex-col">
                    {/* 투타 */}
                    <p className="">{player.positionHitType}</p>
                    {/* 포지션 영문 */}
                    <div className="">{player.positionEng}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 선수 정보 박스*/}
          <div className="w-[178px] h-[80px] relative ml-9 -mt-2 inset-0 flex flex-col justify-center text-white text-xs font-bold bg-zinc-300/50 rounded-[5px] px-4 py-1">
            <div className="flex flex-row w-full justify-between my-0.5">
              <div className="text-left">생년월일:</div>
              <div className="text-right">{player.playerDOB}</div>
            </div>
            <div className="flex flex-row w-full justify-between my-0.5">
              <div className="text-left">체격:</div>
              <div className="text-right">{`${player.playerHeight}cm, ${player.playerWeight}kg`}</div>
            </div>
            <div className="flex flex-row w-full justify-between my-0.5">
              <div className="">프로데뷔:</div>
              <div className="items-end">{`${player.debutYear}년`}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (size === 'large') {
    return (
      <>
        {/* 카드 뒷면 */}
        <div
          className={`bg-black rounded-xl overflow-hidden relative m-4 items-center justify-center transform transition-transform ${sizeClass}`}
        >
          {/* 선수 이미지 */}
          <div
            className={`relative ${photoSize} mx-auto  rounded-t-2xl overflow-hidden`}
          >
            <Image
              src={player.playerBackImg}
              alt={`${player.korName} Image`}
              layout="fill"
              className="absolute pt-4 object-cover rounded-2xl"
            />
          </div>
          {/*프레임 이미지*/}
          <div className="absolute inset-0">
            <Image
              src={'/images/backCardFrame.png'}
              alt={'Back Card Frame'}
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="relative inset-0 flex text-white/80 text-lg font-bold bottom-0 h-1/3 mx-7 -mt-5 ">
            <div className="flex flex-col bg-yellow-200/0 w-full">
              {/* 선수 이름 */}
              <div className="bg-slate-400/0 flex flex-row">
                {/* 선수 국문 이름 */}
                <div className="text-2xl leading-relaxed text-left pr-1.5">
                  {player.korName}
                </div>
                {/* 선수 영문 이름 */}
                <div className="font-bold pb-0 text-base flex items-end">
                  {player.engName}
                </div>
              </div>
              {/* 포지션 */}
              <div className="bg-pink-300/0 w-full h-full flex flex-col pt-2 justify-between">
                {/* 포지션 맵 */}
                <div className="absolute ml-6 mt-1 w-[120px] h-[92px]">
                  {' '}
                  <Image
                    src={`/images/player/playerPosition/${player.positionEng}.png`}
                    alt={`${player.positionKor} 사진`}
                    layout="fill"
                    className="absolute object-cover"
                  />
                </div>
                <div className="flex flex-row place-content-end items-end pt-10 mr-8">
                  {/* 포지션 국문 */}
                  <p className="text-xl">{player.positionKor}</p>

                  <div className="text-right flex flex-col">
                    {/* 투타 */}
                    <p className="">{player.positionHitType}</p>
                    {/* 포지션 영문 */}
                    <div className="pl-2">{player.positionEng}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 선수 정보 박스*/}
          <div className="w-2/3 h-1/5 relative ml-14 mt-2 inset-0 flex flex-col justify-center text-white text-sm font-bold bg-zinc-300/50 rounded-[5px] px-5 py-3">
            <div className="flex flex-row w-full justify-between my-1">
              <div className="text-left">생년월일:</div>
              <div className="text-right">{player.playerDOB}</div>
            </div>
            <div className="flex flex-row w-full justify-between my-1">
              <div className="text-left">체격:</div>
              <div className="text-right">{`${player.playerHeight}cm, ${player.playerWeight}kg`}</div>
            </div>
            <div className="flex flex-row w-full justify-between my-1">
              <div className="">프로데뷔:</div>
              <div className="items-end">{`${player.debutYear}년`}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default CardBack;
