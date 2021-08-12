import React, { useState, useRef, useEffect } from 'react';
import { FixedSizeList as List } from 'react-window';
import SearchCoinPreview from './SearchCoinPreview';
import getAvailableCoins from '../api/getAvailableCoins';

const styles = {
    mainContainer: 'h-16 bg-lightPurple flex justify-center items-center',
    contentContainer: 'flex flex-col items-center relative',
    coinSearchInput: 'p-1 bg-white rounded-t focus:outline-none',
    searchMenu:
        'absolute w-full bg-white top-8 rounded-b transition-all duration-200 linear',
};

const Topbar = () => {
    const [hideSearchMenu, setHideSearchMenu] = useState(true);
    const [availableCoins, setAvailableCoins] = useState([]);
    const listRef = useRef();

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

    useEffect(() => {
        const getCoins = async () => {
            try {
                const availableCoins = await getAvailableCoins();
                const filteredCoinsArr = [];
                availableCoins.forEach((coin) => {
                    if (
                        coin.logo_url !== '' &&
                        coin.description !== '' &&
                        coin.name !== ''
                    ) {
                        filteredCoinsArr.push(coin);
                    }
                });
                setAvailableCoins(filteredCoinsArr);
            } catch (e) {
                setAvailableCoins(null);
            }
        };
        getCoins();
    }, []);

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

    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                {availableCoins === null ? (
                    <h2>Error loading available coins</h2>
                ) : (
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
                                hideSearchMenu
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
                )}
            </div>
        </div>
    );
};

export default Topbar;
