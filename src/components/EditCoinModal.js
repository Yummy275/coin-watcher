import React from 'react';
import StdBtn from './StdBtn';

const styles = {
    container:
        'absolute z-10 flex flex-col justify-center items-center w-4/5 h-4/5 bg-russianViolet top-1/10 left-1/10',
};

const EditCoinModal = ({ hold }) => {
    return (
        <div className={styles.container}>
            <p>
                Hold Amount: <input type="number" step="any" min="0"></input>
            </p>
            <StdBtn string="Delete" size="12"></StdBtn>
            <StdBtn string="Okay" size="12"></StdBtn>
        </div>
    );
};

export default EditCoinModal;
