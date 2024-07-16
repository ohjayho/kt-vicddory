'use client';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useState } from 'react';
import DarkUnica from 'highcharts/themes/dark-unica';

DarkUnica(Highcharts);

export default function Chart({ title }: { title: string }) {
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
        data: [3, 1, 3, 2, 1, 3, 2, 1, 2],
        visible: false,
      },
      {
        name: 'KT',
        data: [1, 3, 1, 4, 2, 1, 4, 2, 7],
        visible: true,
      },
      {
        name: 'SSG',
        data: [10, 2, 6, 1, 3, 6, 1, 3, 5],
        visible: false,
      },
      {
        name: 'NC',
        data: [2, 9, 7, 6, 4, 7, 6, 4, 6],
        visible: false,
      },
      {
        name: '두산',
        data: [8, 8, 4, 9, 5, 4, 9, 5, 4],
        visible: false,
      },
      {
        name: 'KIA',
        data: [7, 10, 9, 5, 6, 9, 5, 6, 1],
        visible: false,
      },
      {
        name: '롯데',
        data: [9, 4, 8, 8, 7, 8, 8, 7, 8],
        visible: false,
      },
      {
        name: '삼성',
        data: [6, 5, 2, 7, 8, 2, 7, 8, 3],
        visible: false,
      },
      {
        name: '한화',
        data: [4, 6, 10, 10, 9, 10, 10, 9, 9],
        visible: false,
      },
      {
        name: '키움',
        data: [5, 7, 5, 3, 10, 5, 3, 10, 10],
        visible: false,
      },
    ],
    xAxis: {
      categories: [
        2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
      ],
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
