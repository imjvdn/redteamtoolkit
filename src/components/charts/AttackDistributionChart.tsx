import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Brute Force', 'SQL Injection', 'XSS', 'CSRF', 'File Inclusion'],
  datasets: [
    {
      data: [45, 25, 15, 10, 5],
      backgroundColor: [
        '#8B5CF6',
        '#3B82F6',
        '#10B981',
        '#F59E0B',
        '#EF4444'
      ],
      borderColor: [
        '#8B5CF6',
        '#3B82F6',
        '#10B981',
        '#F59E0B',
        '#EF4444'
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
      labels: {
        color: '#fff',
        padding: 20,
        font: {
          size: 12
        }
      }
    }
  },
  cutout: '70%'
};

export function AttackDistributionChart() {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
      <h3 className="text-lg font-medium text-white mb-4">Attack Distribution</h3>
      <div className="h-[300px] flex items-center justify-center">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}
