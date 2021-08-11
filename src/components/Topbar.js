import React, { useState } from 'react';
import { FixedSizeList as List } from 'react-window';

const styles = {
    mainContainer: 'h-16 bg-lightPurple flex justify-center items-center',
    contentContainer: 'flex flex-col items-center relative',
    coinSearchInput: 'rounded p-1 bg-white focus:outline-none',
    searchMenu: 'absolute w-full bg-white top-8 rounded',
};

const Topbar = () => {
    const [searchInput, setSearchInput] = useState('');
    const [hideSearchMenu, setHideSearchMenu] = useState(true);

    return (
        <div className={styles.mainContainer}>
            <div
                className={styles.contentContainer}
                onMouseEnter={() => setHideSearchMenu(false)}
                onMouseLeave={() => setHideSearchMenu(true)}
            >
                <input
                    className={styles.coinSearchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <div
                    className={`${styles.searchMenu} ${
                        hideSearchMenu ? 'h-0' : 'h-96'
                    }`}
                ></div>
            </div>
        </div>
    );
};

export default Topbar;
