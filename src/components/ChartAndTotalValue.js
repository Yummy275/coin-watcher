import React from 'react';
import DoughnutChart from './DoughnutChart';
import getHoldAmount from '../data/getHoldAmount';

const styles = {
    mainContainer: 'w-100 max-w-2xl mx-auto mt-5',
    totalValue: 'mb-5 text-3xl text-center',
};

const ChartAndTotalValue = ({ userCoinsTickerData }) => {
    const chartData = (data) => {
        const coinArr = [];
        for (var i = 0; i < data.length; i++) {
            const holdAmount = getHoldAmount(data[i].symbol);
            const totalAmountWorth = holdAmount * data[i].price;
            const round = totalAmountWorth.toFixed(2);
            const backToNumber = Number(round);
            const coinObject = {
                symbol: data[i].symbol,
                totalWorth: backToNumber,
            };
            coinArr.push(coinObject);
        }
        return coinArr;
    };

    const findTotalWorth = () => {
        let total = 0;
        for (var i = 0; i < userCoinsTickerData.length; i++) {
            const holdAmount = getHoldAmount(userCoinsTickerData[i].symbol);
            const worth = holdAmount * userCoinsTickerData[i].price;
            total += worth;
        }
        const round = total.toFixed(2);
        const backToNumber = Number(round);
        const formattedTotal = backToNumber.toLocaleString();
        return formattedTotal;
    };

    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.totalValue}>${findTotalWorth()}</h1>
            <DoughnutChart data={chartData(userCoinsTickerData)} />
        </div>
    );
};

export default ChartAndTotalValue;
