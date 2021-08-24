import React, { useState } from 'react';

const styles = {
    blurredBg:
        'blurredBg flex justify-center items-center w-screen h-screen absolute z-10',
    contentContainer:
        'flex flex-col w-102 h-102 p-3 bg-white rounded shadow-md',
    title: 'text-center text-lg',
    logo: 'w-28 my-2 mx-auto',
    description: 'text-sm text-center h-56 overflow-auto',
    holdAmtInput: 'p-1 mt-2',
    btnsContainer: 'flex justify-evenly mt-5',
    btn: 'bg-whitePurple py-1 px-2 rounded',
};

const AddCoinModal = ({ coinData, closeModal }) => {
    const [holdVal, setHoldValue] = useState(null);

    const AddCoin = () => {};

    return (
        <div className={styles.blurredBg}>
            <div className={styles.contentContainer}>
                <div
                    className={styles.title}
                >{`${coinData.name} (${coinData.id})`}</div>
                <img
                    src={coinData.logo_url}
                    alt="coin-logo"
                    className={styles.logo}
                />
                <p className={styles.description}>{coinData.description}</p>
                <input
                    className={styles.holdAmtInput}
                    placeholder="Hold amount"
                    type="number"
                    step="any"
                />
                <div className={styles.btnsContainer}>
                    <button className={styles.btn}>Add Coin</button>
                    <button className={styles.btn} onClick={closeModal}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddCoinModal;
