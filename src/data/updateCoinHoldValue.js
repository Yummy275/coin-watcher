import loadSavedCoins from './loadSavedCoins';
import roundNumberString from './roundNumberString';

const updateCoinHoldValue = (symbol, newHoldValue) => {
    const formattedHoldAmount = roundNumberString(newHoldValue);
    const savedCoinsArr = loadSavedCoins();
    for (var i = 0; i < savedCoinsArr.length; i++) {
        if (savedCoinsArr[i].symbol === symbol) {
            savedCoinsArr[i].holdAmount = formattedHoldAmount;
            localStorage.setItem('savedCoins', JSON.stringify(savedCoinsArr));
        }
    }
};

export default updateCoinHoldValue;
