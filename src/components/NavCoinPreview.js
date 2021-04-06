import React from 'react';

const styles = {
    container: 'flex ml-3 my-2',
    logo: 'h-12 w-12',
    textHolder: 'ml-1',
    id: 'text-sm',
    name: 'text-base',
};

const NavCoinPreview = ({ logo, id, name }) => {
    return (
        <div className={styles.container}>
            <img src={logo} className={styles.logo}></img>
            <div className={styles.textHolder}>
                <p className={styles.id}>({id})</p>
                <p className={styles.name}>{name}</p>
            </div>
        </div>
    );
};

export default NavCoinPreview;
