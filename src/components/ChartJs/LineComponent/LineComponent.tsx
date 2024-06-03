'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales
} from 'chart.js';
import { linerData } from '../Data/DataSet';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,

  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineComponent = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        border: { display: false }
      },
      y: {
        grid: { display: false },
        border: { display: false }
      }
    },
    elements: {
      line: {
        borderWidth: 100 // Menghilangkan garis
      },
      point: {
        radius: 10 // Menghilangkan titik-titik data jika diinginkan
      }
    },
    plugins: {
      legend: {
        display: true // Sembunyikan legend jika tidak dibutuhkan
      }
    }
  };

  const modifiedData = {
    ...linerData,
    datasets: linerData.datasets.map((dataset) => ({
      ...dataset,
      fill: true,
      backgroundColor: '#E6F2FC', // Warna bayangan di bawah garis
      borderColor: 'rgba(75, 192, 192, 1)', // Warna garis
      tension: 0.4
    }))
  };

  return <Line options={options} data={modifiedData} />;
};

export default LineComponent;
