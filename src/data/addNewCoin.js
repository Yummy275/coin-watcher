import loadSavedCoins from './loadSavedCoins';
import roundNumberString from './roundNumberString';

const addNewCoin = (symbol, holdAmount) => {
    const formattedHoldAmount = roundNumberString(holdAmount);
    const newCoin = { symbol: symbol, holdAmount: formattedHoldAmount };
    const currentCoins = loadSavedCoins();
    if (currentCoins === null) {
        const arr = [newCoin];
        localStorage.setItem('savedCoins', JSON.stringify(arr));
    } else {
        let alreadyOwnCoinFlag = false;
        for (var i = 0; i < currentCoins.length; i++) {
            if (symbol === currentCoins[i].symbol) {
                alreadyOwnCoinFlag = true;
                break;
            }
        }
        if (alreadyOwnCoinFlag === false) {
            const updatedArr = [...currentCoins, newCoin];
            localStorage.setItem('savedCoins', JSON.stringify(updatedArr));
        } else {
            alert('You have already added this coin!');
        }
    }
};

export default addNewCoin;
