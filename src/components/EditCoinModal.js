import React from 'react';
import StdBtn from './StdBtn';

const styles = {
    container:
        'absolute z-10 flex flex-col justify-center items-center w-4/5 h-4/5 bg-russianViolet top-1/10 left-1/10',
    holdInput: 'w-20 p-1',
    lrgTxt: 'text-xl',
    holdTxt: 'my-4',
};

const EditCoinModal = ({ symbol, hold }) => {
    return (
        <div className={styles.container}>
            <p className={styles.lrgTxt}> Coin: {symbol}</p>
            <p className={styles.holdTxt}>
                Hold Amount:{' '}
                <input
                    className={styles.holdInput}
                    type="number"
                    step="any"
                    min="0"
                    placeholder={hold}
                ></input>
            </p>
            <StdBtn string="Delete" size="24"></StdBtn>
            <StdBtn string="Apply" size="24"></StdBtn>
        </div>
    );
};

export default EditCoinModal;
