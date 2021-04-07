import React from 'react';
import coinEye from '../images/eyecoin.png';
import ethCoin from '../images/ethcoin.png';

const styles = {
    container: 'bg-white flex flex-col justify-center items-center',
    eyeImgDiv: 'relative flex justify-center items-center mb-10',
    eyeOutline: '',
    rotatingCoin: 'absolute h-28 w-28 animate-coinSpin',
    wordBox: 'text-xl text-center bg-englishLavender p-5',
};

const NoSavedCoinsSign = () => {
    return (
        <div
            style={{ height: 'calc(100vh - 3rem)' }}
            className={styles.container}
        >
            <div className={styles.eyeImgDiv}>
                <img
                    className={styles.rotatingCoin}
                    alt="ethcoin"
                    src={ethCoin}
                ></img>
                <img
                    className={styles.eyeOutline}
                    src={coinEye}
                    alt="coin eye"
                ></img>
            </div>
            <div className={styles.wordBox}>
                Search for coins using search bar above!
            </div>
        </div>
    );
};

export default NoSavedCoinsSign;
