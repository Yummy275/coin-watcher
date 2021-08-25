import React from 'react';
import CoinsSection from './CoinsSection';
import ChartAndTotalValue from './ChartAndTotalValue';

const UsersCoinInformation = ({ userCoinsTickerData, loadingData }) => {
    return (
        <div className="lg:flex">
            <CoinsSection
                userCoinsTickerData={userCoinsTickerData}
                loadingData={loadingData}
            />
            <ChartAndTotalValue userCoinsTickerData={userCoinsTickerData} />
        </div>
    );
};

export default UsersCoinInformation;
