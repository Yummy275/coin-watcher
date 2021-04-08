import React from 'react';
import CoinInfo from './CoinInfo';
import getHoldAmount from '../data/getHoldAmount';

const styles = {
    container: `flex flex-wrap w-100 justify-center bg-spaceCadet`,
    totalWorth: 'text-center text-2xl bg-spaceCadet p-4',
};

const CoinHolder = ({ coinsData, updateSavedCoins }) => {
    const findTotalWorth = () => {
        let total = 0;
        for (var i = 0; i < coinsData.length; i++) {
            const holdAmount = getHoldAmount(coinsData[i].symbol);
            const worth = holdAmount * coinsData[i].price;

            total += worth;
        }
        const round = total.toFixed(2);
        const backToNumber = Number(round);
        const formattedTotal = backToNumber.toLocaleString();
        return formattedTotal;
    };

    const totalWorth = findTotalWorth();

    return (
        <>
            <p className={styles.totalWorth}>Total: ${totalWorth}</p>
            <div className={styles.container}>
                {coinsData.map((coin) => {
                    console.log(coin.symbol);
                    return (
                        <CoinInfo
                            key={coin.name}
                            logo={coin.logo_url}
                            name={coin.name}
                            symbol={coin.symbol}
                            hold={getHoldAmount(coin.symbol)}
                            price={coin.price}
                            updateSavedCoins={updateSavedCoins}
                        ></CoinInfo>
                    );
                })}
            </div>
        </>
    );
};

export default CoinHolder;
