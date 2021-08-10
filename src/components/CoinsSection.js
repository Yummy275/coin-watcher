import React from 'react';

const styles = {
    mainContainer:
        'coins-container h-full bg-lightPurpleToWhiteGradientDown w-80',
};

const CoinsSection = () => {
    return (
        <div className={styles.mainContainer}>
            <h1>COINS</h1>
        </div>
    );
};

export default CoinsSection;
