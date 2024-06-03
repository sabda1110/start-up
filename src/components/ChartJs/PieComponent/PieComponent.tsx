'use client';

import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { pieData } from '../Data/DataSet';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieComponent = () => {
  const options = {};

  return <Pie options={options} data={pieData} />;
};

export default PieComponent;
