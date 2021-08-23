import React from 'react';

const styles = {
    blurredBg:
        'blurredBg d-flex justify-center items-center w-screen h-screen absolute z-10',
    contentContainer: '',
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
