import React, { useRef, useState } from 'react';
import NavCoinPreview from './NavCoinPreview';

const styles = {
    navbar: `relative h-12 flex justify-center items-center bg-englishLavender`,
    searchInput: `h-3/4 rounded-md p-1 bg-white`,
    searchBox:
        'transition-all duration-1000 absolute w-60 top-12 overflow-y-scroll bg-englishLavender',
};

const Navbar = ({ availableCoins }) => {
    const searchInput = useRef();
    const [searchBoxHidden, setSearchBoxHidden] = useState(true);

    console.log(availableCoins);

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
                    searchBoxHidden ? 'h-0' : 'h-48'
                }`}
            >
                {availableCoins.length === 0 ? (
                    ''
                ) : (
                    <>
                        <NavCoinPreview
                            key={availableCoins[0].id}
                            logo={availableCoins[0].logo_url}
                            id={availableCoins[0].id}
                            name={availableCoins[0].name}
                        ></NavCoinPreview>
                        <NavCoinPreview
                            key={availableCoins[1].id}
                            logo={availableCoins[1].logo_url}
                            id={availableCoins[1].id}
                            name={availableCoins[1].name}
                        ></NavCoinPreview>
                        <NavCoinPreview
                            key={availableCoins[2].id}
                            logo={availableCoins[2].logo_url}
                            id={availableCoins[2].id}
                            name={availableCoins[2].name}
                        ></NavCoinPreview>
                        <NavCoinPreview
                            key={availableCoins[3].id}
                            logo={availableCoins[3].logo_url}
                            id={availableCoins[3].id}
                            name={availableCoins[3].name}
                        ></NavCoinPreview>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
