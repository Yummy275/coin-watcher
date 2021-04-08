import React from 'react';
import CoinInfo from './CoinInfo';
import getHoldAmount from '../data/getHoldAmount';

const styles = {
    container: `flex flex-wrap w-100 justify-center bg-spaceCadet`,
};

const CoinHolder = ({ coinsData }) => {
    return (
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
                    ></CoinInfo>
                );
            })}
        </div>
    );
};

export default CoinHolder;
