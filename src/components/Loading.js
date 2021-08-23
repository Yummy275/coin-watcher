import React from 'react';
import ethCoin from '../images/ethcoin.png';

const styles = {
    mainContainer: 'h-64 flex justify-center',
    eye: 'bg-eyeOutline bg-contain bg-center bg-no-repeat w-60 flex items-center justify-center',
    ethCoin: 'absolute w-12 animate-coinSpin',
};

const Loading = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={`${styles.eye}`}>
                <img
                    className={styles.ethCoin}
                    src={ethCoin}
                    alt="loading coin"
                />
            </div>
        </div>
    );
};

export default Loading;
