import React from 'react';
import getHoldAmount from '../data/getHoldAmount';

const styles = {
    mainContainer: 'flex m-4',
    coinImg: 'w-14',
    infoSection: 'ml-2',
    coinTitle: '',
    coinInfo: '',
};

const UserCoinTickerInfo = ({ coinInfo }) => {
    const holdAmount = getHoldAmount(coinInfo.id);
    const parsedPrice = parseFloat(coinInfo.price);
    return (
        <div className={styles.mainContainer}>
            <img
                className={styles.coinImg}
                src={coinInfo.logo_url}
                alt="coin-logo"
            />
            <div className={styles.infoSection}>
                <div className={styles.coinTitle}>
                    {`${coinInfo.name} (${coinInfo.symbol}`})
                </div>
                <div className={styles.coinInfo}>${parsedPrice.toFixed(2)}</div>
                <div className={styles.coinInfo}>x {holdAmount}</div>
                <div className={styles.coinInfo}>
                    ${(parsedPrice * holdAmount).toFixed(2)}
                </div>
            </div>
        </div>
    );
};

export default UserCoinTickerInfo;
