import React from 'react';
import getHoldAmount from '../data/getHoldAmount';

const styles = {
    mainContainer: 'flex m-2 p-2 bg-white rounded',
    coinImg: 'w-14',
    infoSection: 'ml-2',
    coinTitle: 'text-lg',
    coinInfo: '',
    coinTotal: 'italic underline',
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
                <div className={styles.coinTotal}>
                    ${(parsedPrice * holdAmount).toFixed(2)}
                </div>
            </div>
        </div>
    );
};

export default UserCoinTickerInfo;
