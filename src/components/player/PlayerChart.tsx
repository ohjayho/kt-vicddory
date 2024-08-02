'use client';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsReact from 'highcharts-react-official';
import DarkUnica from 'highcharts/themes/dark-unica';
import {
  TPitcherMetric,
  TCatcherMetric,
  TInfielderMetric,
  TPlayerMetric,
} from '@/types';
import { useState } from 'react';
import Image from 'next/image';
import getPlayerMetric from '@/utils/getPlayerMetric';
type positionType = {
  pitcher: CategoryDescriptions;
  catcher: CategoryDescriptions;
  infielder: CategoryDescriptions;
  outfielder: CategoryDescriptions;
};
interface PlayerChartProps {
  positionAIMetric: TPlayerMetric | null;
  positionCurrentMetric: TPitcherMetric | TCatcherMetric | TInfielderMetric;
  position: keyof positionType;
  showExpectedSeries: boolean;
}
HighchartsMore(Highcharts);
DarkUnica(Highcharts);
type CategoryDescriptions = {
  categories: string[];
  descriptions: { [key: string]: string };
  standards: { [key: string]: number };
};

const positionCategory: positionType = {
  pitcher: {
    categories: ['ERA', 'K/BB', 'WHIP', '피안타율', 'QS'],
    descriptions: {
      ERA: '평균 자책점 (Eard Run Average). 투수가 9이닝 동안 허용한 평균 자책점으로, 낮을수록 좋습니다.',
      'K/BB':
        '삼진/볼넷 비율(Strikes per Walk). 투수가 삼진을 많이 잡고 볼넷을 적게 허용할수록 좋기 때문에 높을수록 좋습니다.',
      WHIP: '이닝당 허용한 안타와 볼넷의 합계 (Walks plus Hits per Inning Pitched). 투수가 이닝당 허용하는 안타와 볼넷이 적을수록 좋기 때문에 낮을수록 좋습니다.',
      피안타율: '투수가 상대에게 허용한 타율로, 낮을수록 좋습니다.',
      QS: '선발 투수가 6이닝 이상 던지며 3점 이하의 자책점을 이용한 경기 수 (Quality Start). 투수가 많은 경기를 오래 던지며 적은 점수를 허용할수록 좋기 때문에 높을수록 좋습니다.',
    },
    standards: {
      ERA: 4.0,
      'K/BB': 5.0,
      WHIP: 1.5,
      피안타율: 0.4,
      QS: 20,
    },
  },
  catcher: {
    categories: ['FPCT', 'CS%', 'PB', 'rSB', 'CERA'],
    descriptions: {
      FPCT: '수비율(Fielding Percentage). 수비 기회를 처리한 비율로, 높을수록 좋습니다.',
      'CS%':
        '도루 저지율(Caught Stealing Percentage). 도루를 시도한 주자를 잡아낸 비율로, 높을수록 좋습니다.',
      PB: '포일(Passed Balls). 포수가 놓친 공의 수로, 낮을수록 좋습니다.',
      rSB: '도루 저지 횟수(Runs Saved by Stolen Base Attempts). 도루 저지로 인한 팀 득점 방지 횟수로, 높을수록 좋습니다.',
      CERA: "포수의 평균 자책점(Catcher's Earned Run Average). 포수가 있을 때의 투수 평균 자책점으로, 낮을수록 좋습니다.",
    },
    standards: {
      FPCT: 0.98,
      'CS%': 40,
      PB: 10,
      rSB: 4,
      CERA: 3.5,
    },
  },
  infielder: {
    categories: ['BA', 'OBP', 'SLG', 'OPS', 'FPCT', 'WAR'],
    descriptions: {
      BA: '타율(Batting Average). 타자가 공을 쳐서 출루한 비율로, 높을수록 좋습니다.',
      OBP: '출루율(On-Base Percentage). 타자가 출루하는 비율로, 높을수록 좋습니다.',
      SLG: '장타율(Slugging Percentage). 타자가 장타를 치는 능력을 나타내며, 높을수록 좋습니다.',
      OPS: '출루율과 장타율의 합(On-Base Plus Slugging). 타자의 전반적인 타격 능력을 나타내며, 높을수록 좋습니다.',
      FPCT: '수비율(Fielding Percentage). 수비 기회를 처리한 비율로, 높을수록 좋습니다.',
      WAR: '대체 선수 대비 승리 기여도(Wins Above Replacement). 선수가 팀에 기여한 승리 수로, 높을수록 좋습니다.',
    },
    standards: {
      BA: 0.3,
      OBP: 0.4,
      SLG: 0.5,
      OPS: 0.9,
      FPCT: 0.99,
      WAR: 5.0,
    },
  },
  outfielder: {
    categories: ['BA', 'OBP', 'SLG', 'OPS', 'FPCT', 'WAR'],
    descriptions: {
      BA: '타율(Batting Average). 타자가 공을 쳐서 출루한 비율로, 높을수록 좋습니다.',
      OBP: '출루율(On-Base Percentage). 타자가 출루하는 비율로, 높을수록 좋습니다.',
      SLG: '장타율(Slugging Percentage). 타자가 장타를 치는 능력을 나타내며, 높을수록 좋습니다.',
      OPS: '출루율과 장타율의 합(On-Base Plus Slugging). 타자의 전반적인 타격 능력을 나타내며, 높을수록 좋습니다.',
      FPCT: '수비율(Fielding Percentage). 수비 기회를 처리한 비율로, 높을수록 좋습니다.',
      WAR: '대체 선수 대비 승리 기여도(Wins Above Replacement). 선수가 팀에 기여한 승리 수로, 높을수록 좋습니다.',
    },
    standards: {
      BA: 0.3,
      OBP: 0.4,
      SLG: 0.5,
      OPS: 0.9,
      FPCT: 0.99,
      WAR: 5.0,
    },
  },
};

export default function PlayerChart({
  positionAIMetric,
  positionCurrentMetric,
  position,
  showExpectedSeries,
}: PlayerChartProps) {
  const currentMetric = getPlayerMetric(position, positionCurrentMetric);
  const expectedMetric = getPlayerMetric(position, positionAIMetric);

  // Scale the data for each category based on the global maximum
  const scaledExpectedData = positionCategory[position].categories.map(
    (category, index) => {
      const yExpectedValue =
        expectedMetric[index] / positionCategory[position].standards[category];
      return {
        name: category,
        y: parseFloat(yExpectedValue.toFixed(2)),
      };
    },
  );
  const scaledCurrentData = positionCategory[position].categories.map(
    (category, index) => {
      const yCurrentValue =
        currentMetric[index] / positionCategory[position].standards[category];
      return {
        name: category,
        y: parseFloat(yCurrentValue.toFixed(2)),
      };
    },
  );
  const [descriptionButton, setDescriptionButton] = useState(false);
  const onDescriptionHandler = () => {
    setDescriptionButton(!descriptionButton);
  };
  const options = {
    title: {
      text: '선수 예측 데이터',
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
      categories: positionCategory[position].categories,
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
        data: scaledCurrentData,
        visible: true,
        pointPlacement: 'on',
      },
      {
        name: 'Expected',
        data: scaledExpectedData,
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
      <div className="bg-black">
        {' '}
        <div className="pt-4">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        <div className="bg-black ">
          <button
            className={`h-8 w-fit mx-4 mb-4 ml-6 flex flex-row `}
            onClick={onDescriptionHandler}
          >
            <Image
              src={'/svgs/Alertcircle.svg'}
              alt=">"
              width={32}
              height={32}
              className={`fill-white ${descriptionButton ? 'bg-red-50 pr-0 rounded-lg' : ''}`}
            />
            <div className="text-lg text-white pl-2 pt-0.5">
              지표별 설명 보기
            </div>{' '}
          </button>
          {descriptionButton && (
            <div className="absolute bottom-auto w-1/3 max-md:w-2/3 max-md:transform max-md:-translate-x-4 max-md:-translate-y-60 max-md:text-wrap max-md:left-1/4 left-1/2 transform translate-x-28 -translate-y-12 p-4 bg-white/90 z-10 rounded-lg">
              {positionCategory[position].categories.map((category, index) => (
                <div
                  key={index}
                  className="category-description text-justify mt-2"
                  id={`description-${index + 1}`}
                >
                  <span className="font-bold">{category}: </span>
                  {positionCategory[position].descriptions[category]}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
