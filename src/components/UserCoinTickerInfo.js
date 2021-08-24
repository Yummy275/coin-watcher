import React from 'react';

const styles = {
    mainContainer: '',
    coinImg: 'w-12',
    coinTitle: '',
    coinInfo: '',
};

const UserCoinTickerInfo = ({ coinInfo }) => {
    return (
        <div className={styles.mainContainer}>
            <img
                className={styles.coinImg}
                src={coinInfo.logo_url}
                alt="coin-logo"
            />
            <div>
                <div
                    className={styles.coinTitle}
                >{`${coinInfo.name} ${coinInfo.symbol}`}</div>
                <div className={styles.coinInfo}>{coinInfo.price}</div>
            </div>
        </div>
    );
};

export default UserCoinTickerInfo;
