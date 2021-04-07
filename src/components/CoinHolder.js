import React from 'react';
import CoinInfo from './CoinInfo';

const styles = {
    container: `flex flex-wrap w-100 justify-flex-start bg-spaceCadet`,
};

const CoinHolder = ({ coinsData }) => {
    console.log(coinsData);
    return (
        <div className={styles.container}>
            {coinsData.map((coin) => {
                console.log(coin.name);
                return (
                    <CoinInfo
                        key={coin.name}
                        logo={coin.logo_url}
                        name={coin.name}
                        symbol={coin.symbol}
                        price={coin.price}
                    ></CoinInfo>
                );
            })}
        </div>
    );
};

export default CoinHolder;
