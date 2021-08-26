import React from 'react';
import Loading from './Loading';
import UserCoinTickerInfo from './UserCoinTickerInfo';

const styles = {
    mainContainer:
        'coins-container lg:w-2/5 bg-lightPurpleToWhiteGradientDown overflow-auto',
    userCoins: 'flex lg:flex-wrap w-max lg:w-auto mb-4 lg:mb-0',
    noCoinsMsg: 'text-2xl p-1 text-center',
};

const CoinsSection = ({
    userCoinsTickerData,
    loadingData,
    updateUserCoins,
}) => {
    return (
        <div className={styles.mainContainer}>
            {loadingData ? (
                <Loading />
            ) : (
                <>
                    {userCoinsTickerData.length === 0 ? (
                        <h2 className={styles.noCoinsMsg}>
                            No saved coins found! Use search above to find
                            coins.
                        </h2>
                    ) : (
                        <div className={styles.userCoins}>
                            {userCoinsTickerData.map((coin) => (
                                <UserCoinTickerInfo
                                    coinInfo={coin}
                                    key={coin.id}
                                    updateUserCoins={updateUserCoins}
                                />
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default CoinsSection;
