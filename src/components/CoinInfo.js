import React from 'react';

const styles = {
    container: `p-2 m-4`,
    headerHolder: `flex items-center space-x-1`,
    coinLogo: 'w-10 h-10',
    smTxt: 'text-xs',
    headingText: `text-base`,
    coinPriceInfoHolder: `text-sm`,
};

const CoinInfo = ({
    logo,
    name,
    symbol,
    hold,
    price,
    intervalPercentChange,
}) => {
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
                <div className={styles.wordBox}>
                    <p className={styles.smTxt}>({symbol})</p>
                    <p className={styles.headingText}>{name}</p>
                </div>
            </div>
            <div className={styles.coinPriceInfoHolder}>
                <p>Hold: {hold}</p>
                <p>@ ${formattedPrice}</p>
                <p>{price}</p>
                <p>{intervalPercentChange}</p>
            </div>
        </div>
    );
};

export default CoinInfo;
