import React from 'react';
import PlayerDetailClient from '@/components/player/PlayerDetail';
import getDefaultMetric from '@/utils/getDefaultMetric';
import getPlayerData from '@/utils/getPlayerData';

export default async function PitcherDetail({ params }: { params: any }) {
  const player = getPlayerData(params.pitcherId, 'pitcher');

  if (player.data.metric2023 === undefined || player.data.metric2023 === null) {
    player.data.metric2023 = getDefaultMetric('pitcher');
  }

  return (
    <>
      <PlayerDetailClient player={player} position="pitcher" />
    </>
  );
}
