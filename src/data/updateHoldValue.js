import loadSavedCoins from './loadSavedCoins';

const updateHoldValue = (symbol, newHold) => {
    const newHoldToNumber = Number(newHold);
    const rounded = newHoldToNumber.toFixed(8);
    const formattedHoldAmount = Number(rounded);
    const savedCoinsArr = loadSavedCoins();
    for (var i = 0; i < savedCoinsArr.length; i++) {
        if (savedCoinsArr[i].symbol === symbol) {
            savedCoinsArr[i].holdAmount = formattedHoldAmount;
            localStorage.setItem('savedCoins', JSON.stringify(savedCoinsArr));
        }
    }
};

export default updateHoldValue;
