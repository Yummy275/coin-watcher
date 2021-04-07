import React, { useRef } from 'react';
import StdBtn from './StdBtn';
import addNewCoin from '../data/addNewCoin';

const styles = {
    container:
        'absolute z-10 flex flex-col justify-center items-center w-4/5 h-4/5 bg-russianViolet top-1/10 left-1/10',
    question: 'text-center p-2 text-md',
    input: 'p-1 w-40 my-3 text-black',
    smallTxt: 'text-xs my-1',
};

const AddCoinModal = ({ hideModal, symbol }) => {
    const userInput = useRef();

    const AddCoin = () => {
        addNewCoin(symbol, userInput.current.value);
        hideModal();
    };

    return (
        <div className={styles.container}>
            <p className={styles.question}>
                How many {symbol} do you currently have?
            </p>
            <p className={styles.smallTxt}>(up to 8 decimals)</p>
            <input
                ref={userInput}
                type="number"
                step="any"
                min="0"
                className={styles.input}
            ></input>
            <StdBtn string="Add Coin" handleClick={AddCoin}></StdBtn>
        </div>
    );
};

export default AddCoinModal;
