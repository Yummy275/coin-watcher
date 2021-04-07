import loadSavedCoins from './loadSavedCoins';

const getSavedCoinSymbols = () => {
    const coinBag = loadSavedCoins();
    const symbols = coinBag.map((coin) => {
        return coin.symbol;
    });
    return symbols;
};

export default getSavedCoinSymbols;
