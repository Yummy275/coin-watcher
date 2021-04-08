import React, { useState } from 'react';
import StdBtn from './StdBtn';
import EditCoinModal from './EditCoinModal';

const styles = {
    container: `flex flex-col items-center p-2 my-4 mx-2`,
    headerHolder: `flex items-center space-x-1`,
    coinLogo: 'w-10 h-10',
    smTxt: 'text-xs',
    headingText: `text-base`,
    coinPriceInfoHolder: `text-sm my-2 text-center`,
};

const getTotalCoinWorth = (price, hold) => {
    const worth = price * hold;
    const round = worth.toFixed(2);
    //because toFixed makes it a string
    const backToNumber = Number(round);
    const formattedWorth = backToNumber.toLocaleString(2);
    return formattedWorth;
};

const CoinInfo = ({
    logo,
    name,
    symbol,
    hold,
    price,
    intervalPercentChange,
    updateSavedCoins,
}) => {
    const [viewingEditModal, setViewingEditModal] = useState(false);

    const openEditModal = () => {
        setViewingEditModal(true);
    };

    const parsedPrice = parseFloat(price);
    const formattedPrice = parsedPrice.toFixed(2);

    return (
        <div className={styles.container}>
            {viewingEditModal ? (
                <EditCoinModal
                    updateSavedCoins={updateSavedCoins}
                    symbol={symbol}
                    hold={hold}
                    setViewingEditModal={setViewingEditModal}
                ></EditCoinModal>
            ) : (
                ''
            )}
            <div className={styles.headerHolder}>
                <img
                    alt="Coin logo"
                    src={logo}
                    className={styles.coinLogo}
                ></img>
                <div className={styles.wordBox}>
                    <p className={styles.smTxt}>({symbol})</p>
                    <p className={styles.headingText}>{name}</p>
                </div>
            </div>
            <div className={styles.coinPriceInfoHolder}>
                <p>Hold: {hold}</p>
                <p>@ ${formattedPrice}</p>
                <p>${getTotalCoinWorth(price, hold)}</p>
            </div>
            <StdBtn
                string="Edit"
                size="20"
                handleClick={openEditModal}
            ></StdBtn>
        </div>
    );
};

export default CoinInfo;
