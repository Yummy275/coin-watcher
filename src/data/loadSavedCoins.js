const loadSavedCoins = () => {
    const currentCoins = JSON.parse(localStorage.getItem('savedCoins'));
    return currentCoins;
};

export default loadSavedCoins;
