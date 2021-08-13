import React from 'react';

const styles = {
    blurredBg:
        'd-flex justify-center items-center w-screen h-screen absolute blur',
    contentContainer: '',
};

const AddCoinModal = ({ logo, id, name }) => {
    return (
        <div className={styles.blurredBg}>
            <div className={styles.contentContainer}>
                <p>ADD COIN MODAL</p>
            </div>
        </div>
    );
};

export default AddCoinModal;
