import React from 'react';
import ethCoin from '../images/ethcoin.png';
import eye from '../images/eye.png';

const styles = {
    mainContainer: 'relative w-full h-64 flex items-center justify-center',
    eye: 'absolute w-60 z-40',
    ethCoin: 'absolute w-14 z-50 animate-coinSpin',
};

const Loading = () => {
    return (
        <div className={styles.mainContainer}>
            <img className={styles.eye} src={eye} alt="loading eye" />
            <img className={styles.ethCoin} src={ethCoin} alt="loading coin" />
        </div>
    );
};

export default Loading;
