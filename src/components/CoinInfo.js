import React from 'react';

const styles = {
    container: `bg-spaceCadet w-5/6 p-2`,
    headerHolder: `flex items-center space-x-1`,
    coinLogo: 'w-10 h-10',
    headingText: `text-xl`,
    coinPriceInfoHolder: ``,
};

const CoinInfo = ({ logo, name, symbol, price, intervalPercentChange }) => {
    console.log(price);
    const parsedPrice = parseFloat(price);
    const formattedPrice = parsedPrice.toFixed(2);

    return (
        <div className={styles.container}>
            <div className={styles.headerHolder}>
                <h2 className={styles.heading}>
                    {name} ({symbol})
                </h2>
                <img
                    alt="Coin logo"
                    src={logo}
                    className={styles.coinLogo}
                ></img>
            </div>
            <div className={styles.coinPriceInfoHolder}>
                <p>Hold: 5</p>
                <p>@ ${formattedPrice} per</p>
                <p>$50,000</p>
                <p>{intervalPercentChange}</p>
            </div>
        </div>
    );
};

export default CoinInfo;
