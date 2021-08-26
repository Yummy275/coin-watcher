import React, { useState, useEffect } from 'react';
import Topbar from './Topbar';
import AddCoinModal from './AddCoinModal';
import UsersCoinInformation from './UserCoinsInformation';
import loadSavedCoins from '../data/loadSavedCoins';
import getSavedCoinSymbols from '../data/getSavedCoinSymbols';
import getCoinsInfo from '../api/getCoinsInfo';

const MainDisplay = () => {
    const [addingCoinData, setAddingCoinData] = useState(null);
    const [userCoinsTickerData, setUserCoinsTickerData] = useState([]);
    const [loading, setLoading] = useState(true);

    const updateUserCoins = async () => {
        const savedCoins = loadSavedCoins();
        if (savedCoins) {
            const coinSymbols = getSavedCoinSymbols();
            try {
                const coinTickerData = await getCoinsInfo(coinSymbols);
                setUserCoinsTickerData(coinTickerData);
            } catch (error) {
                alert('Error getting coin information. Reload.');
                setUserCoinsTickerData(null);
            }
        } else {
            setUserCoinsTickerData([]);
        }
    };

    useEffect(() => {
        const initialLoad = async () => {
            await updateUserCoins();
            setLoading(false);
        };

        initialLoad();
    }, []);

    useEffect(() => {
        const autoUpdatePrices = setInterval(() => {
            updateUserCoins();
        }, 30000);
        return () => clearInterval(autoUpdatePrices);
    });

    return (
        <>
            {addingCoinData ? (
                <AddCoinModal
                    updateUserCoins={updateUserCoins}
                    coinData={addingCoinData}
                    closeModal={() => setAddingCoinData(null)}
                />
            ) : (
                ''
            )}
            <Topbar
                setAddingCoinData={setAddingCoinData}
                userCoinsInfoStillLoading={loading}
            />
            <UsersCoinInformation
                userCoinsTickerData={userCoinsTickerData}
                loadingData={loading}
                updateUserCoins={updateUserCoins}
            />
        </>
    );
};

export default MainDisplay;
