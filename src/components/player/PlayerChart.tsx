'use client';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsReact from 'highcharts-react-official';
import DarkUnica from 'highcharts/themes/dark-unica';
HighchartsMore(Highcharts);
DarkUnica(Highcharts);

export default function PlayerChart({
  title,
  showExpectedSeries,
}: {
  title: string;
  showExpectedSeries: boolean;
}) {
  const options = {
    title: {
      text: `${title}`,
      margin: 90,
      x: 0,
    },
    chart: {
      type: 'area',
      polar: true,
      backgroundColor: 'transparent',
      style: {
        fontFamily: 'NanumSquareNeo',
      },
    },
    pane: {
      size: '120%',
    },
    xAxis: {
      categories: ['ERA', 'K/BB', 'WHIP', '피안타율', 'QS'],
      tickmarkPlacement: 'on',
      lineWidth: 0,
    },

    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0,
    },
    series: [
      {
        name: 'Current',
        data: [0.88, 0.7, 0.6, 0.5, 0.3],
        visible: true,
        pointPlacement: 'on',
      },
      {
        name: 'Expected',
        data: [0.18, 0.9, 0.8, 0.3, 0.6],
        visible: showExpectedSeries,
        pointPlacement: 'on',
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 1000,
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal',
            },
            pane: {
              size: '140%',
            },
          },
        },
      ],
    },
    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical',
      margin: 20,
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      shared: true,
    },
  };
  return (
    <>
      <div className="p-4">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </>
  );
}
