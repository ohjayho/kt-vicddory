import React from 'react';
import PlayerDetailClient from '@/components/player/PlayerDetail';
import getDefaultMetric from '@/utils/getDefaultMetric';
import getPlayerData from '@/utils/getPlayerData';

export default async function InfielderDetail({ params }: { params: any }) {
  const player = getPlayerData(params.infielderId, 'infielder');

  if (player.data.metric2023 === undefined || player.data.metric2023 === null) {
    player.data.metric2023 = getDefaultMetric('infielder');
  }

  return (
    <>
      <PlayerDetailClient player={player} position="infielder" />
    </>
  );
}
