import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData }) {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'DATE', // Set the label for the X-axis
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'WEIGHT', // Set the label for the Y-axis
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text:  'Weight Vs Date Graph', // Set the title text here
        font:{
         size: 20
        },
        color:'black'
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;
