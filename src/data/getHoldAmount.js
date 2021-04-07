import loadSavedCoins from './loadSavedCoins';

const getHoldAmount = (symbol) => {
    const savedCoins = loadSavedCoins();
    let holdAmount;
    for (var i = 0; i < savedCoins.length; i++) {
        if (savedCoins[i].symbol === symbol) {
            holdAmount = savedCoins[i].holdAmount;
            break;
        }
    }
    return holdAmount;
};

export default getHoldAmount;
