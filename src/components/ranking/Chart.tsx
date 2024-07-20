'use client';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useEffect, useRef, useState } from 'react';
import DarkUnica from 'highcharts/themes/dark-unica';
import { getTeamRanks } from '@/utils/getTeamRanks';

DarkUnica(Highcharts);

export default function Chart({ title }: { title: string }) {
  const chartRef = useRef(null);
  const { yearRank: ktRank, year: ktYear } = getTeamRanks('KT');
  const [maxNum, setMaxNum] = useState(ktYear.length);
  console.log('🚀  chartRef:', chartRef);

  const { yearRank: lgRank, year: lgYear } = getTeamRanks('LG');
  // console.log('🚀  lgYear:', lgYear);
  const { yearRank: ssgRank, year: ssgYear } = getTeamRanks('SSG');
  const { yearRank: ncRank, year: ncYear } = getTeamRanks('NC');
  const { yearRank: doosanRank, year: doosanYear } = getTeamRanks('두산');
  const { yearRank: kiaRank, year: kiaYear } = getTeamRanks('KIA');
  const { yearRank: lotteRank, year: lotteYear } = getTeamRanks('롯데');
  const { yearRank: samsungRank, year: samsungYear } = getTeamRanks('삼성');
  const { yearRank: hanwhaRank, year: hanwhaYear } = getTeamRanks('한화');
  const { yearRank: kiwoomRank, year: kiwoomYear } = getTeamRanks('키움');
  const { yearRank: hyundaiRank, year: hyundaiYear } = getTeamRanks('현대');
  const { yearRank: ssangbangwoolRank, year: ssangbangwoolYear } =
    getTeamRanks('쌍방울');

  // const [options, setOptions] = useState({
  //   title: {
  //     text: `${title}`,
  //     margin: 50,
  //   },
  //   subtitle: {
  //     text: '오른쪽 팀 명을 선택하시면 팀별로 그래프를 확인하실 수 있습니다',
  //   },
  //   series: [
  //     {
  //       name: 'LG',
  //       data: lgRank,
  //       visible: false,
  //     },
  //     {
  //       name: 'KT',
  //       data: ktRank,
  //       visible: true,
  //     },
  //     {
  //       name: 'SSG',
  //       data: ssgRank,
  //       visible: false,
  //     },
  //     {
  //       name: 'NC',
  //       data: ncRank,
  //       visible: false,
  //     },
  //     {
  //       name: '두산',
  //       data: doosanRank,
  //       visible: false,
  //     },
  //     {
  //       name: 'KIA',
  //       data: kiaRank,
  //       visible: false,
  //     },
  //     {
  //       name: '롯데',
  //       data: lotteRank,
  //       visible: false,
  //     },
  //     {
  //       name: '삼성',
  //       data: samsungRank,
  //       visible: false,
  //     },
  //     {
  //       name: '한화',
  //       data: hanwhaRank,
  //       visible: false,
  //     },
  //     {
  //       name: '키움',
  //       data: kiwoomRank,
  //       visible: false,
  //     },
  //     {
  //       name: '현대',
  //       data: hyundaiRank,
  //       visible: false,
  //     },
  //     {
  //       name: '쌍방울',
  //       data: ssangbangwoolRank,
  //       visible: false,
  //     },
  //   ],

  //   xAxis: {
  //     // categories: yearRankJson.map((item) => item.year),
  //     categories: '',

  //     labels: {
  //       rotation: -90,
  //       align: 'right',
  //     },
  //   },
  //   yAxis: {
  //     title: {
  //       text: 'Ranking',
  //     },
  //     reversed: true,
  //     tickInterval: 1,
  //     min: 0,
  //     max: 11,
  //     labels: {
  //       formatter: function (
  //         this: Highcharts.AxisLabelsFormatterContextObject,
  //       ): string | number {
  //         if (this.value === 0 || this.value === 11) {
  //           return '';
  //         }
  //         return this.value;
  //       },
  //     },
  //   },
  //   responsive: {
  //     rules: [
  //       {
  //         condition: {
  //           maxWidth: 500,
  //         },
  //         chartOptions: {
  //           legend: {
  //             enabled: false,
  //           },
  //         },
  //       },
  //     ],
  //   },
  //   legend: {
  //     layout: 'vertical',
  //     align: 'right',
  //     verticalAlign: 'middle',
  //   },
  //   credits: {
  //     enabled: false,
  //   },
  //   chart: {
  //     height: 560,
  //     backgroundColor: 'transparent',
  //   },
  // });

  // Highcharts.setOptions({

  //   xAxis: {
  //     categories: Array.from({ length: maxNum }, (v, i) => 2024 - (maxNum - i)),
  //     labels: {
  //       rotation: -90,
  //       align: 'right',
  //     },
  //   },
  // });
  const options = {
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
        data: lgRank,
        visible: false,
      },
      {
        name: 'KT',
        data: ktRank,
        visible: true,
      },
      {
        name: 'SSG',
        data: ssgRank,
        visible: false,
      },
      {
        name: 'NC',
        data: ncRank,
        visible: false,
      },
      {
        name: '두산',
        data: doosanRank,
        visible: false,
      },
      {
        name: 'KIA',
        data: kiaRank,
        visible: false,
      },
      {
        name: '롯데',
        data: lotteRank,
        visible: false,
      },
      {
        name: '삼성',
        data: samsungRank,
        visible: false,
      },
      {
        name: '한화',
        data: hanwhaRank,
        visible: false,
      },
      {
        name: '키움',
        data: kiwoomRank,
        visible: false,
      },
      {
        name: '현대',
        data: hyundaiRank,
        visible: false,
      },
      {
        name: '쌍방울',
        data: ssangbangwoolRank,
        visible: false,
      },
    ],

    xAxis: {
      // categories: yearRankJson.map((item) => item.year),
      categories: Array.from({ length: maxNum }, (v, i) => 2024 - (maxNum - i)),

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
  };

  useEffect(() => {
    document
      .querySelector('.highcharts-legend')
      ?.addEventListener('click', () => {
        // console.log(chartRef.current?.chart);
        const series = chartRef.current.chart.series;
        const selectedTeam = series.filter((v) => v.visible === true);
        let selectedteamsData = selectedTeam.map((v) => v.data.length);
        setMaxNum(() => Math.max(...selectedteamsData));
        console.log(maxNum);
      });
  }, [maxNum]);

  return (
    <div className="max-sm:min-w-[600px]">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={'chart'}
        ref={chartRef}
      />
    </div>
  );
}
