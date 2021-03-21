import React from 'react';

const styles = {
    container: `bg-spaceCadet`,
};

const CoinInfo = ({ logo, name, symbol, price, intervalPercentChange }) => {
    return (
        <div className={styles.container}>
            <img alt="Coin logo" src={logo}></img>
            <h4>{name}</h4>
            <h3>{symbol}</h3>
            <h2>${price}</h2>
            <p>{intervalPercentChange}</p>
        </div>
    );
};

export default CoinInfo;
