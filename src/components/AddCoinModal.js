import React from 'react';

const styles = {
    blurredBg:
        'blurredBg flex justify-center items-center w-screen h-screen absolute z-10',
    contentContainer: 'w-102 h-102 p-3 bg-white rounded shadow-md',
};

const AddCoinModal = ({ coinData }) => {
    console.log(coinData);
    return (
        <div className={styles.blurredBg}>
            <div className={styles.contentContainer}>
                <p>ADD COIN MODAL</p>
            </div>
        </div>
    );
};

export default AddCoinModal;
