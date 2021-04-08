import React from 'react';
import { Doughnut } from '@iftek/react-chartjs-3';

const DoughnutChart = ({ data }) => {
    const labels = [];
    const dataPoints = [];

    for (var i = 0; i < data.length; i++) {
        labels.push(data[0].symbol);
        dataPoints.push(data[0].totalWorth);
    }

    const chartData = {
        labels: labels,
        datasets: [
            {
                data: dataPoints,
            },
        ],
    };

    console.log(chartData);

    return <Doughnut data={chartData}></Doughnut>;
};

export default DoughnutChart;
