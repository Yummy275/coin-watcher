import React from 'react';

const styles = {
    container: `p-2`,
    headerHolder: `flex items-center space-x-1`,
    coinLogo: 'w-10 h-10',
    headingText: `text-base`,
    coinPriceInfoHolder: `text-sm`,
};

const CoinInfo = ({ logo, name, symbol, price, intervalPercentChange }) => {
    const parsedPrice = parseFloat(price);
    const formattedPrice = parsedPrice.toFixed(2);

    return (
        <div className={styles.container}>
            <div className={styles.headerHolder}>
                <img
                    alt="Coin logo"
                    src={logo}
                    className={styles.coinLogo}
                ></img>
                <p className={styles.headingText}>
                    {name} ({symbol})
                </p>
            </div>
            <div className={styles.coinPriceInfoHolder}>
                <p>Hold: 5</p>
                <p>@ ${formattedPrice}</p>
                <p>$50,000</p>
                <p>{intervalPercentChange}</p>
            </div>
        </div>
    );
};

export default CoinInfo;
