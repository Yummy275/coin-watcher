import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import getCoinsInfo from '../api/getCoinsInfo';
import loadSavedCoins from '../data/loadSavedCoins';

const styles = {
    mainContainer:
        'coins-container w-full md:w-2/5 bg-lightPurpleToWhiteGradientDown',
};

const CoinsSection = () => {
    const [userCoins, setUserCoins] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedCoins = loadSavedCoins();
        console.log(savedCoins);
        if (savedCoins) {
            console.log('user has coins');
        }
    }, []);

    return (
        <div className={styles.mainContainer}>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <h1>COINS</h1>
                </>
            )}
        </div>
    );
};

export default CoinsSection;
