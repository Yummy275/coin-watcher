import React from 'react';

const styles = {
    container: 'bg-spaceCadet flex justify-center items-center',
    wordBox: 'text-xl text-center',
};

const NoSavedCoinsSign = () => {
    return (
        <div
            style={{ height: 'calc(100vh - 3rem)' }}
            className={styles.container}
        >
            <p className={styles.wordBox}>
                Use search box above to add your coins!
            </p>
        </div>
    );
};

export default NoSavedCoinsSign;
