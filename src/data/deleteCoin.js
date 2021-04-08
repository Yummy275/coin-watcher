import loadSavedCoins from './loadSavedCoins';

const deleteCoin = (symbol) => {
    const savedCoinsArr = loadSavedCoins();
    for (var i = 0; i < savedCoinsArr.length; i++) {
        if (savedCoinsArr[i].symbol === symbol) {
            savedCoinsArr.splice(i, 1);
            localStorage.setItem('savedCoins', JSON.stringify(savedCoinsArr));
        }
    }
};

export default deleteCoin;
