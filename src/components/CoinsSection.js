import React from 'react';
import Loading from './Loading';
import UserCoinTickerInfo from './UserCoinTickerInfo';

const styles = {
    mainContainer:
        'coins-container w-full md:w-2/5 bg-lightPurpleToWhiteGradientDown',
    userCoins: 'flex flex-wrap',
};

const CoinsSection = ({ userCoinsTickerData, loadingData }) => {
    return (
        <div className={styles.mainContainer}>
            {loadingData ? (
                <Loading />
            ) : (
                <>
                    {userCoinsTickerData === null ? (
                        <h1>No coins found</h1>
                    ) : (
                        <div className={styles.userCoins}>
                            {userCoinsTickerData.map((coin) => (
                                <UserCoinTickerInfo
                                    coinInfo={coin}
                                    key={coin.id}
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
