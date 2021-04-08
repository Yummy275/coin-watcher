import loadSavedCoins from './loadSavedCoins';

const addNewCoin = (symbol, holdAmount) => {
    const newCoin = { symbol: symbol, holdAmount: holdAmount };
    const currentCoins = loadSavedCoins();
    if (currentCoins === null) {
        const arr = [newCoin];
        localStorage.setItem('savedCoins', JSON.stringify(arr));
    } else {
        let alreadyOwnCoin = false;
        for (var i = 0; i < currentCoins.length; i++) {
            if (symbol === currentCoins[i].symbol) {
                alreadyOwnCoin = true;
            }
        }

        if (alreadyOwnCoin === false) {
            const updatedArr = [...currentCoins, newCoin];
            localStorage.setItem('savedCoins', JSON.stringify(updatedArr));
        } else {
            alert(
                'You have already added this coin before! Edit hold amount or delete using edit button.'
            );
        }
    }
};

export default addNewCoin;
