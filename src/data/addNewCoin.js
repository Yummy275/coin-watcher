const addNewCoin = (symbol, holdAmount) => {
    const newCoin = { symbol: symbol, holdAmount: holdAmount };
    const currentCoins = localStorage.getItem('savedCoins');
    if (currentCoins === null) {
        const arr = [newCoin];
        localStorage.setItem('savedCoins', JSON.stringify(arr));
    } else {
        const currentCoins = JSON.parse(localStorage.getItem('savedCoins'));
        const updatedArr = [...currentCoins, newCoin];
        localStorage.setItem('savedCoins', JSON.stringify(updatedArr));
    }
};

export default addNewCoin;
