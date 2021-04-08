import React from 'react';
import CoinInfo from './CoinInfo';
import StdBtn from './StdBtn';
import getHoldAmount from '../data/getHoldAmount';

const styles = {
    mainContainer: 'flex flex-col items-center bg-spaceCadet p-4',
    coinsHolder: `flex flex-wrap w-100 justify-center`,
    totalWorth: 'text-2xl',
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
        <div className={styles.mainContainer}>
            <p className={styles.totalWorth}>Total: ${totalWorth}</p>
            <div className={styles.coinsHolder}>
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
            <StdBtn
                string="Update Prices"
                size="40"
                handleClick={updateSavedCoins}
            ></StdBtn>
        </div>
    );
};

export default CoinHolder;
