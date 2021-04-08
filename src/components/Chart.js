import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const Chart = ({ data }) => {
    const labels = [];
    const dataPoints = [];

    for (var i = 0; i < data.length; i++) {
        labels.push(data[0].symbol);
        dataPoints.push(data[0].totalWorth);
    }

    const chartData = {
        labels: labels,
        data: dataPoints,
    };

    return <Doughnut data={chartData}></Doughnut>;
};

export default Chart;
