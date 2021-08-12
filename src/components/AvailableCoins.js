import React, { useRef } from 'react';
import { FixedSizeList as List } from 'react-window';
import SearchCoinPreview from './SearchCoinPreview';

const styles = {
    coinSearchInput: 'p-1 bg-white rounded-t focus:outline-none',
    searchMenu:
        'absolute w-full bg-white top-8 rounded-b transition-all duration-200 linear',
};

const AvailableCoins = ({ availableCoins, setHideSearchMenu, hiding }) => {
    const listRef = useRef();

    const SearchCoinListTemplate = ({ index, style }) => (
        <div
            style={style}
            className={`${index % 2 === 0 ? 'bg-white' : 'bg-whitePurple'}`}
        >
            <SearchCoinPreview
                logo={availableCoins[index].logo_url}
                id={availableCoins[index].id}
                name={availableCoins[index].name}
            />
        </div>
    );

    const searchAvailableCoins = (searchInput) => {
        let scrollIndex = 0;
        const inputValue = searchInput;
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

    return (
        <>
            <input
                className={styles.coinSearchInput}
                onChange={(e) => {
                    searchAvailableCoins(e.target.value);
                }}
                onFocus={() => setHideSearchMenu(false)}
                onBlur={() => setHideSearchMenu(true)}
            />
            <div
                className={`${styles.searchMenu} ${
                    hiding
                        ? 'h-0 opacity-0 pointer-events-none'
                        : 'h-96 opacity-100 pointer-events-auto'
                }`}
            >
                <List
                    ref={listRef}
                    height={380}
                    itemCount={availableCoins.length}
                    itemSize={80}
                    width={310}
                >
                    {SearchCoinListTemplate}
                </List>
            </div>
        </>
    );
};

export default AvailableCoins;
