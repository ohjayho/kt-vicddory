import { TPitcherMetric, TCatcherMetric, TInfielderMetric } from '@/types';

export default function getPlayerMetric(
  position: string,
  metric: TPitcherMetric | TCatcherMetric | TInfielderMetric,
) {
  if (position === 'pitcher') {
    const pitcherMetric = metric as TPitcherMetric;
    //console.log(metric);
    return [
      pitcherMetric.ERA,
      pitcherMetric['K/BB'],
      pitcherMetric.WHIP,
      pitcherMetric.피안타율,
      pitcherMetric.QS,
    ];
  } else if (position === 'catcher') {
    const catcherMetric = metric as TCatcherMetric;
    return [
      catcherMetric.FPCT,
      catcherMetric['CS%'],
      catcherMetric.PB,
      catcherMetric.rSB,
      catcherMetric.CERA,
    ];
  } else if (position === 'infielder') {
    const infielderMetric = metric as TInfielderMetric;
    return [
      infielderMetric.BA,
      infielderMetric.OBP,
      infielderMetric.SLG,
      infielderMetric.OPS,
      infielderMetric.FPCT,
      infielderMetric.WAR,
    ];
  } else if (position === 'outfielder') {
    const outfielderMetric = metric as TInfielderMetric;
    return [
      outfielderMetric.BA,
      outfielderMetric.OBP,
      outfielderMetric.SLG,
      outfielderMetric.OPS,
      outfielderMetric.FPCT,
      outfielderMetric.WAR,
    ];
  } else {
    return [];
  }
}
