import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import getCoinsInfo from '../api/getCoinsInfo';

const styles = {
    mainContainer:
        'coins-container w-full md:w-2/5 bg-lightPurpleToWhiteGradientDown',
};

const CoinsSection = ({ userCoins, userCoinsLoading }) => {
    return (
        <div className={styles.mainContainer}>
            {userCoinsLoading ? (
                <Loading />
            ) : (
                <>
                    <h1>I HAVE {userCoins.length} COINS!</h1>
                </>
            )}
        </div>
    );
};

export default CoinsSection;
