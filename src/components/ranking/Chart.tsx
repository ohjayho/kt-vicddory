'use client';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useState } from 'react';
import DarkUnica from 'highcharts/themes/dark-unica';
import year_rank from '#/data/year_rank.json';
import { getTeamRanks } from '@/utils/getTeamRanks';

DarkUnica(Highcharts);

export default function Chart({ title }: { title: string }) {
  const yearRankJson = year_rank;
  // const ktRank = getTeamRanks('KT');

  const [options] = useState({
    title: {
      text: `${title}`,
      margin: 50,
    },
    subtitle: {
      text: '오른쪽 팀 명을 선택하시면 팀별로 그래프를 확인하실 수 있습니다',
    },
    series: [
      {
        name: 'LG',
        data: getTeamRanks('LG'),
        visible: false,
      },
      {
        name: 'KT',
        data: getTeamRanks('KT'),
        visible: true,
      },
      {
        name: 'SSG',
        data: getTeamRanks('SSG'),
        visible: false,
      },
      {
        name: 'NC',
        data: getTeamRanks('NC'),
        visible: false,
      },
      {
        name: '두산',
        data: getTeamRanks('두산'),
        visible: false,
      },
      {
        name: 'KIA',
        data: getTeamRanks('KIA'),
        visible: false,
      },
      {
        name: '롯데',
        data: getTeamRanks('롯데'),
        visible: false,
      },
      {
        name: '삼성',
        data: getTeamRanks('삼성'),
        visible: false,
      },
      {
        name: '한화',
        data: getTeamRanks('한화'),
        visible: false,
      },
      {
        name: '키움',
        data: getTeamRanks('키움'),
        visible: false,
      },
      {
        name: '현대',
        data: getTeamRanks('현대'),
        visible: false,
      },
      {
        name: '쌍방울',
        data: getTeamRanks('쌍방울'),
        visible: false,
      },
    ],
    xAxis: {
      categories: yearRankJson.map((item) => item.year),
      labels: {
        rotation: -90,
        align: 'right',
      },
    },
    yAxis: {
      title: {
        text: 'Ranking',
      },
      reversed: true,
      tickInterval: 1,
      min: 0,
      max: 11,
      labels: {
        formatter: function (
          this: Highcharts.AxisLabelsFormatterContextObject,
        ): string | number {
          if (this.value === 0 || this.value === 11) {
            return '';
          }
          return this.value;
        },
      },
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              enabled: false,
            },
          },
        },
      ],
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },
    credits: {
      enabled: false,
    },
    chart: {
      height: 560,
      backgroundColor: 'transparent',
    },
  });

  return (
    <div className="max-sm:min-w-[600px]">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={'chart'}
      />
    </div>
  );
}
