import React, { useRef, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import NavCoinPreview from './NavCoinPreview';

const styles = {
    navbar: `relative h-12 flex justify-center items-center bg-englishLavender`,
    searchInput: `h-3/4 rounded-md p-1 bg-white`,
    searchBox:
        'transition-all duration-1000 absolute top-12 overflow-hidden bg-englishLavender',
};

const Navbar = ({ availableCoins, setNewCoinSymbol }) => {
    const searchInput = useRef();
    const [searchBoxHidden, setSearchBoxHidden] = useState(true);

    const Row = ({ index, style }) => (
        <div style={style}>
            {
                <NavCoinPreview
                    logo={availableCoins[index].logo_url}
                    id={availableCoins[index].id}
                    name={availableCoins[index].name}
                    setNewCoinSymbol={setNewCoinSymbol}
                ></NavCoinPreview>
            }
        </div>
    );

    return (
        <div
            className={styles.navbar}
            onMouseEnter={() => setSearchBoxHidden(false)}
            onMouseLeave={() => setSearchBoxHidden(true)}
        >
            <input
                onFocus={() => setSearchBoxHidden(false)}
                ref={searchInput}
                className={styles.searchInput}
                placeholder="Search"
            ></input>
            <div
                className={`${styles.searchBox} ${
                    searchBoxHidden ? 'h-0' : 'h-80'
                }`}
            >
                {availableCoins.length === 0 ? (
                    ''
                ) : (
                    <>
                        <List
                            height={400}
                            itemCount={availableCoins.length}
                            itemSize={80}
                            width={320}
                        >
                            {Row}
                        </List>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
