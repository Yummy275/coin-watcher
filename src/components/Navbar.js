import React, { useRef, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import NavCoinPreview from './NavCoinPreview';

const styles = {
    navbar: `relative h-12 flex justify-center items-center bg-englishLavender`,
    searchInput: `h-3/4 w-56 rounded-md p-1 bg-white text-black`,
    searchBox:
        'transition-all z-10 duration-1000 absolute top-12 overflow-hidden bg-englishLavender',
};

const Navbar = ({ availableCoins, setNewCoinSymbol }) => {
    const searchInput = useRef();
    const listRef = useRef();
    const [searchBoxHidden, setSearchBoxHidden] = useState(true);

    const searchAvailableCoins = () => {
        let scrollIndex = 0;
        const inputValue = searchInput.current.value;
        const formattedInputValue = inputValue.toLowerCase();
        for (var i = 0; i < availableCoins.length; i++) {
            const formattedName = availableCoins[i].name.toLowerCase();
            if (formattedName === formattedInputValue) {
                scrollIndex = i;
                break;
            } else if (
                formattedName.startsWith(formattedInputValue) &&
                scrollIndex === 0
            ) {
                scrollIndex = i;
            }
        }
        listRef.current.scrollToItem(scrollIndex, 'start');
    };

    const Row = ({ index, style }) => (
        <div style={style}>
            {
                <NavCoinPreview
                    logo={availableCoins[index].logo_url}
                    id={availableCoins[index].id}
                    name={availableCoins[index].name}
                    setNewCoinSymbol={setNewCoinSymbol}
                    setSearchBoxHidden={setSearchBoxHidden}
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
                placeholder="Search Name"
                onChange={searchAvailableCoins}
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
                            ref={listRef}
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
