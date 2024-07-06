import React from 'react';
import PlayerCard from '@/components/tradingCard/PlayerCard';

interface Player {
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
export default Player;
interface PlayerListProps {
  playerList: Player[];
}

const PlayerList: React.FC<PlayerListProps> = ({ playerList }) => {
  return <div className=""></div>;
};
