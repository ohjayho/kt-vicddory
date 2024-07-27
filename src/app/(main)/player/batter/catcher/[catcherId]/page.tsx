import React from 'react';
import PlayerDetailClient from '@/components/player/PlayerDetail';
import getDefaultMetric from '@/utils/getDefaultMetric';
import getPlayerData from '@/utils/getPlayerData';

export default async function CatcherDetail({ params }: any) {
  const player = getPlayerData(params.catcherId, 'catcher');

  if (player.data.metric2023 === undefined || player.data.metric2023 === null) {
    player.data.metric2023 = getDefaultMetric('catcher');
  }

  return (
    <>
      <PlayerDetailClient player={player} position="catcher" />
    </>
  );
}
