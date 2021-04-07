import React from 'react';

const styles = {
    container: 'flex my-40 mx-auto w-32 justify-center',
    ball: 'rounded-circle h-6 w-6 mx-1 animate-pulse',
};

const LoadingBalls = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.ball} bg-black`}></div>
            <div className={`${styles.ball} bg-russianViolet`}></div>
            <div className={`${styles.ball} bg-spaceCadet`}></div>
        </div>
    );
};

export default LoadingBalls;
