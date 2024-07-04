import React, { useEffect } from 'react';
import {
  Chart as ChartJS,
  RadarController,
  LineElement,
  PointElement,
  RadialLinearScale,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  RadarController,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);
const exampleData = {
  labels: ['ERA', 'K/BB', 'WHIP', '피안타율', 'QS'],
  datasets: [
    {
      label: 'Player Example Dataset1',
      data: [0.88, 0.7, 0.6, 0.5, 0.3],
      fill: true,
      backgroundColor: 'yello-300',
      borderColor: 'yellow-400',
      pointBackgroundColor: 'red-400',
      pointBorderColor: 'red-800',
      pointHoverBackgroundColor: 'red-900',
      pointHoverBorderColor: 'orange-200',
    },
    {
      label: 'Player Example Dataset2',
      data: [0.18, 0.9, 0.8, 0.3, 0.6],
      fill: true,
      backgroundColor: 'pink-300',
      borderColor: 'pink-400',
      pointBackgroundColor: 'green-400',
      pointBorderColor: 'green-800',
      pointHoverBackgroundColor: 'green-900',
      pointHoverBorderColor: 'purple-200',
    },
  ],
};
export default function PlayerChart() {
  const options = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };
  return (
    <>
      <h1>playerChart Component</h1>
      <Radar data={exampleData} options={options} />
    </>
  );
}
