import React, { useState, useEffect } from 'react';
import Topbar from './Topbar';
import CoinsSection from './CoinsSection';
import AddCoinModal from './AddCoinModal';
import loadSavedCoins from '../data/loadSavedCoins';

const MainDisplay = () => {
    const [addingCoinData, setAddingCoinData] = useState(null);
    const [userCoins, setUserCoins] = useState([]);

    useEffect(() => {
        const savedCoins = loadSavedCoins();
        if (savedCoins) {
            setUserCoins(savedCoins);
        }
    }, []);

    const updateUserCoins = () => {
        const savedCoins = loadSavedCoins();
        setUserCoins(savedCoins);
    };

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
            <Topbar setAddingCoinData={setAddingCoinData} />
            <div className="md:flex">
                <CoinsSection userCoins={userCoins} />
            </div>
        </>
    );
};

export default MainDisplay;
