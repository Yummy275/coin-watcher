import React, { useState, useEffect } from 'react';
import getAvailableCoins from '../api/getAvailableCoins';
import AvailableCoins from './AvailableCoins';

const styles = {
    mainContainer:
        'h-16 w-full bg-lightPurple flex justify-center items-center',
    contentContainer: 'flex flex-col items-center relative',
};

const Topbar = ({ setAddingCoinData, userCoinsInfoStillLoading }) => {
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
                alert('Error getting available coins');
                setAvailableCoins(null);
            }
        };

        //checks to make sure done loading user coin info
        //and uses timeout to make sure at least 2 seconds pass
        //nomics API will deny requests if request too fast
        if (!userCoinsInfoStillLoading) {
            setTimeout(() => getCoins(), 2000);
        }
    }, [userCoinsInfoStillLoading]);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                {availableCoins === null ? (
                    <h2>Error loading available coins</h2>
                ) : (
                    <AvailableCoins
                        availableCoins={availableCoins}
                        setAddingCoinData={setAddingCoinData}
                        hiding={hideSearchMenu}
                        setHideSearchMenu={setHideSearchMenu}
                    />
                )}
            </div>
        </div>
    );
};

export default Topbar;
