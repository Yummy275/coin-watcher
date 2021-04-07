const addNewCoin = (coinInfo) => {
    const currentInfo = localStorage.getItem('savedCoins');
    console.log(currentInfo);
    console.log(coinInfo);
};

export default addNewCoin;
