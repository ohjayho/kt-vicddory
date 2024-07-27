import React from 'react';
import PlayerDetailClient from '@/components/player/PlayerDetail';
import getDefaultMetric from '@/utils/getDefaultMetric';
import getPlayerData from '@/utils/getPlayerData';

export default async function OutfielderDetail({ params }: { params: any }) {
  const player = getPlayerData(params.outfielderId, 'outfielder');

  if (player.data.metric2023 === undefined || player.data.metric2023 === null) {
    player.data.metric2023 = getDefaultMetric('outfielder');
  }

  return (
    <>
      <PlayerDetailClient player={player} position="outfielder" />
    </>
  );
}
