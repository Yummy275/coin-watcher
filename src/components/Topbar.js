import React, { useState, useEffect } from 'react';
import getAvailableCoins from '../api/getAvailableCoins';
import AvailableCoins from './AvailableCoins';
import Loading from './Loading';

const styles = {
    mainContainer:
        'h-16 w-full bg-lightPurple flex justify-center items-center',
    contentContainer: 'flex flex-col items-center relative',
};

const Topbar = () => {
    const [hideSearchMenu, setHideSearchMenu] = useState(true);
    const [availableCoins, setAvailableCoins] = useState([]);

    useEffect(() => {
        const getCoins = async () => {
            try {
                const availableCoins = await getAvailableCoins();
                const filteredCoinsArr = [];
                availableCoins.forEach((coin) => {
                    if (
                        coin.logo_url !== '' &&
                        coin.description !== '' &&
                        coin.name !== ''
                    ) {
                        filteredCoinsArr.push(coin);
                    }
                });
                setAvailableCoins(filteredCoinsArr);
            } catch (e) {
                setAvailableCoins(null);
            }
        };
        getCoins();
    }, []);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                {availableCoins === null ? (
                    <h2>Error loading available coins</h2>
                ) : availableCoins.length === 0 ? (
                    <Loading coinOnly />
                ) : (
                    <AvailableCoins
                        availableCoins={availableCoins}
                        hiding={hideSearchMenu}
                        setHideSearchMenu={setHideSearchMenu}
                    />
                )}
            </div>
        </div>
    );
};

export default Topbar;
