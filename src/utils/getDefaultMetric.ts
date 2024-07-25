import { TPitcherMetric, TCatcherMetric, TInfielderMetric } from '@/types';

export function getDefaultMetric(
  position: string,
): TPitcherMetric | TCatcherMetric | TInfielderMetric {
  const randomInRange = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  };
  if (position === 'pitcher') {
    return {
      ERA: randomInRange(1.0, 4.0),
      'K/BB': randomInRange(2.5, 5.0),
      WHIP: randomInRange(0.5, 1.5),
      피안타율: randomInRange(0.02, 0.4),
      QS: randomInRange(5, 20),
    } as TPitcherMetric;
  } else if (position === 'catcher') {
    return {
      FPCT: randomInRange(0.1, 0.98),
      'CS%': randomInRange(20, 40),
      PB: randomInRange(2, 10),
      rSB: randomInRange(1.0, 4),
      CERA: randomInRange(1.2, 3.5),
    } as TCatcherMetric;
  } else {
    return {
      BA: randomInRange(0.04, 0.3),
      OBP: randomInRange(0.02, 0.4),
      SLG: randomInRange(0.02, 0.5),
      OPS: randomInRange(0.11, 0.9),
      FPCT: randomInRange(0.2, 0.99),
      WAR: randomInRange(1.1, 5.0),
    } as TInfielderMetric;
  }
}
