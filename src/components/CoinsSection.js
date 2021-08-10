import React from 'react';

const styles = {
    mainContainer:
        'coins-container w-full md:w-80 bg-lightPurpleToWhiteGradientDown',
};

const CoinsSection = () => {
    return (
        <div className={styles.mainContainer}>
            <h1>COINS</h1>
        </div>
    );
};

export default CoinsSection;
