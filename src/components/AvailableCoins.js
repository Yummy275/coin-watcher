import React, { useRef } from 'react';
import { FixedSizeList as List } from 'react-window';
import SearchCoinPreview from './SearchCoinPreview';
import Loading from './Loading';

const styles = {
    coinSearchInput: 'p-1 bg-white rounded-t focus:outline-none',
    searchMenu:
        'absolute w-full bg-white top-8 rounded-b transition-all duration-200 linear',
};

const AvailableCoins = ({
    availableCoins,
    setAddingCoinData,
    setHideSearchMenu,
    hiding,
}) => {
    const listRef = useRef();

    const coinPreviewClick = (coin) => {
        setHideSearchMenu(true);
        setAddingCoinData(coin);
    };

    const SearchCoinListTemplate = ({ index, style }) => (
        <div
            onClick={() => coinPreviewClick(availableCoins[index])}
            style={style}
            className={`${
                index % 2 === 0 ? 'bg-white' : 'bg-whitePurple'
            } cursor-pointer`}
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
                onClick={() => setHideSearchMenu(false)}
            />
            <div
                onMouseLeave={() => setHideSearchMenu(true)}
                className={`${styles.searchMenu} ${
                    hiding
                        ? 'h-0 opacity-0 pointer-events-none'
                        : 'h-96 opacity-100 pointer-events-auto'
                }`}
            >
                {availableCoins.length === 0 ? (
                    <Loading />
                ) : (
                    <List
                        ref={listRef}
                        height={380}
                        itemCount={availableCoins.length}
                        itemSize={80}
                        width={310}
                    >
                        {SearchCoinListTemplate}
                    </List>
                )}
            </div>
        </>
    );
};

export default AvailableCoins;
