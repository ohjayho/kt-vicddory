export default function getPlayerMetric(position: string, metric: any) {
  if (position === 'pitcher' && metric !== null) {
    const pitcherMetric = metric;
    return [
      pitcherMetric.ERA,
      pitcherMetric['K/BB'],
      pitcherMetric.WHIP,
      pitcherMetric.피안타율,
      pitcherMetric.QS,
    ];
  } else if (position === 'catcher' && metric !== null) {
    const catcherMetric = metric;
    return [
      catcherMetric.FPCT,
      catcherMetric['CS%'],
      catcherMetric.PB,
      catcherMetric.rSB,
      catcherMetric.CERA,
    ];
  } else if (position === 'infielder' && metric !== null) {
    const infielderMetric = metric;
    return [
      infielderMetric.BA,
      infielderMetric.OBP,
      infielderMetric.SLG,
      infielderMetric.OPS,
      infielderMetric.FPCT,
      infielderMetric.WAR,
    ];
  } else if (position === 'outfielder' && metric !== null) {
    const outfielderMetric = metric;
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
