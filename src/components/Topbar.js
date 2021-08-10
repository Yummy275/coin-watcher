import React from 'react';

const styles = {
    mainContainer: 'h-16 bg-lightPurple flex justify-center items-center',
    coinSearchInput: 'rounded-bl-lg',
};

const Topbar = () => {
    return (
        <div className={styles.mainContainer}>
            <input className={styles.coinSearchInput} />
        </div>
    );
};

export default Topbar;
