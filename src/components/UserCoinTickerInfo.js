import React from 'react';
import getHoldAmount from '../data/getHoldAmount';
import deleteCoin from '../data/deleteCoin';

const styles = {
    mainContainer: 'flex m-2 p-2 bg-white rounded',
    coinImg: 'w-14',
    infoSection: 'ml-2',
    coinTitle: 'text-lg',
    deleteBtn: 'inline bg-transparent ml-2 px-1 text-red',
    coinInfo: '',
    coinTotal: 'italic underline',
};

const UserCoinTickerInfo = ({ coinInfo, updateUserCoins }) => {
    const holdAmount = getHoldAmount(coinInfo.id);
    const parsedPrice = parseFloat(coinInfo.price);

    const deleteUserCoin = () => {
        deleteCoin(coinInfo.id);
        updateUserCoins();
    };

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
                    <button
                        onClick={deleteUserCoin}
                        className={styles.deleteBtn}
                    >
                        X
                    </button>
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
