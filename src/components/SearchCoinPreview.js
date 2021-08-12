import React from 'react';

const styles = {
    container: 'cursor-pointer ml-2 flex border-b border-black pb-2',
    logo: 'h-12 w-12',
    textHolder: 'ml-1',
    id: 'text-xs',
    name: 'text-sm',
};

const SearchCoinPreview = ({ logo, id, name }) => {
    return (
        <div className={styles.container}>
            <img src={logo} alt="coin-logo" className={styles.logo}></img>
            <div className={styles.textHolder}>
                <p className={styles.id}>({id})</p>
                <p className={styles.name}>{name}</p>
            </div>
        </div>
    );
};

export default SearchCoinPreview;
