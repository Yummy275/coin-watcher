import React from 'react';
import StdBtn from './StdBtn';
import deleteCoin from '../data/deleteCoin';

const styles = {
    container:
        'absolute z-10 flex flex-col justify-center items-center w-4/5 h-4/5 bg-russianViolet top-1/10 left-1/10',
    holdInput: 'ml-2 w-36 p-1 text-black',
    lrgTxt: 'text-xl',
    holdTxt: 'my-4 text-center',
};

const EditCoinModal = ({ symbol, hold, setViewingEditModal }) => {
    const deleteBtnClick = () => {
        deleteCoin(symbol);
        setViewingEditModal(false);
    };

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
                    defaultValue={hold}
                ></input>
            </p>
            <StdBtn
                string="Delete"
                size="24"
                handleClick={deleteBtnClick}
            ></StdBtn>
            <StdBtn string="Okay" size="24"></StdBtn>
        </div>
    );
};

export default EditCoinModal;
