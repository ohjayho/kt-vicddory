import { TResultPositionProps } from '@/types';

const positionDetails: { [key: string]: TResultPositionProps } = {
  포수: {
    src: '/svgs/test/result/catcher.svg',
    alt: 'catcher',
    width: 238,
    left: 40,
    text: '타자의 심리를 읽는 포수',
    description: '언제나 최전선, 배터리의 심장',
    tags: '#어깨깡패#블로킹#지휘자',
  },
  외야수: {
    src: '/svgs/test/result/outfielder.svg',
    alt: 'outfielder',
    width: 290,
    left: 30,
    text: '빠른 발로 공을 쫓는 외야수',
    description: '넓은 들판의 사냥꾼',
    tags: '#정확성#판단력#파워어깨',
  },
  투수: {
    src: '/svgs/test/result/pitcher.svg',
    alt: 'pitcher',
    width: 360,
    left: -43,
    text: '강속구를 던지는 투수',
    description: '경기의 지휘자, 마운드의 왕',
    tags: '#끈기#제구력#침착',
  },
  내야수: {
    src: '/svgs/test/result/infielder.svg',
    alt: 'infielder',
    width: 243,
    left: 30,
    text: '민첩한 동작의 내야수',
    description: '순간의 반응, 내야의 수호자',
    tags: '#안정적#더블플레이#중심',
  },
};

export default positionDetails;
