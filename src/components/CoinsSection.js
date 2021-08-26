import React from 'react';
import Loading from './Loading';
import UserCoinTickerInfo from './UserCoinTickerInfo';

const styles = {
    mainContainer:
        'coins-container lg:w-2/5 bg-lightPurpleToWhiteGradientDown overflow-auto',
    userCoins: 'flex lg:flex-wrap w-max lg:w-auto mb-4 lg:mb-0',
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
                    {userCoinsTickerData === null ? (
                        <h1>Error getting coin information</h1>
                    ) : userCoinsTickerData.length === 0 ? (
                        <h2>
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
