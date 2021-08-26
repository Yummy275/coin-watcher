import React from 'react';
import CoinsSection from './CoinsSection';
import ChartAndTotalValue from './ChartAndTotalValue';

const UsersCoinInformation = ({
    userCoinsTickerData,
    loadingData,
    updateUserCoins,
}) => {
    if (userCoinsTickerData === null) {
        return <h1>Error loading coins. Reload page or check internet.</h1>;
    } else {
        return (
            <div className="lg:flex">
                <CoinsSection
                    userCoinsTickerData={userCoinsTickerData}
                    loadingData={loadingData}
                    updateUserCoins={updateUserCoins}
                />
                <ChartAndTotalValue userCoinsTickerData={userCoinsTickerData} />
            </div>
        );
    }
};

export default UsersCoinInformation;
