import React from 'react';

const styles = {
    container: 'cursor-pointer ml-2 flex',
    logo: 'h-12 w-12',
    textHolder: 'ml-1',
    id: 'text-xs',
    name: 'text-sm',
};

const NavCoinPreview = ({ logo, id, name, setNewCoinSymbol }) => {
    return (
        <div className={styles.container} onClick={() => setNewCoinSymbol(id)}>
            <img src={logo} className={styles.logo}></img>
            <div className={styles.textHolder}>
                <p className={styles.id}>({id})</p>
                <p className={styles.name}>{name}</p>
            </div>
        </div>
    );
};

export default NavCoinPreview;
