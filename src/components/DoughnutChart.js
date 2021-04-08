import React from 'react';
import { Doughnut } from '@iftek/react-chartjs-3';

const DoughnutChart = ({ data }) => {
    const labels = [];
    const dataPoints = [];

    for (var i = 0; i < data.length; i++) {
        labels.push(data[i].symbol);
        dataPoints.push(data[i].totalWorth);
    }

    const chartData = {
        labels: labels,
        datasets: [
            {
                data: dataPoints,
                backgroundColor: [
                    '#ff0000',
                    '#0000ff',
                    '#065535',
                    '#ff80ed',
                    '#ffa500',
                    '#ffd700',
                    '#00ffff',
                    '#003366',
                    '#66cdaa',
                    '#f5f5f5',
                ],
            },
        ],
    };

    return <Doughnut data={chartData}></Doughnut>;
};

export default DoughnutChart;
