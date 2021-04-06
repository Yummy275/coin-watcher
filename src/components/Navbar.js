import React, { useRef, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import NavCoinPreview from './NavCoinPreview';

const styles = {
    navbar: `relative h-12 flex justify-center items-center bg-englishLavender`,
    searchInput: `h-3/4 rounded-md p-1 bg-white`,
    searchBox:
        'transition-all duration-1000 absolute top-12 overflow-hidden bg-englishLavender',
};

const Navbar = ({ availableCoins }) => {
    const searchInput = useRef();
    const [searchBoxHidden, setSearchBoxHidden] = useState(true);

    const Row = ({ index, style }) => (
        <div style={style}>
            {
                <NavCoinPreview
                    logo={availableCoins[index].logo_url}
                    id={availableCoins[index].id}
                    name={availableCoins[index].name}
                ></NavCoinPreview>
            }
        </div>
    );

    return (
        <div className={styles.navbar}>
            <input
                onFocus={() => setSearchBoxHidden(false)}
                onBlur={() => setSearchBoxHidden(true)}
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
                            height={394}
                            itemCount={1000}
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
