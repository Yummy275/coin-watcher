import loadSavedCoins from './loadSavedCoins';

const updateHoldValue = (symbol, newHold) => {
    const savedCoinsArr = loadSavedCoins();
    for (var i = 0; i < savedCoinsArr.length; i++) {
        if (savedCoinsArr[i].symbol === symbol) {
            savedCoinsArr[i].holdAmount = newHold;
            localStorage.setItem('savedCoins', JSON.stringify(savedCoinsArr));
        }
    }
};

export default updateHoldValue;
