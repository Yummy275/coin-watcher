import React from 'react';
import CoinsSection from './CoinsSection';

const UsersCoinInformation = ({ userCoinsTickerData, loadingData }) => {
    return (
        <div className="md:flex">
            <CoinsSection
                userCoinsTickerData={userCoinsTickerData}
                loadingData={loadingData}
            />
        </div>
    );
};

export default UsersCoinInformation;
