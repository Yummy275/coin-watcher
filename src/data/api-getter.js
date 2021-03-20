const getApiData = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const target = `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=BTC,ETH,XRP&interval=1d,30d&per-page=100&page=1`;
    const response = await fetch(target);
    //converts JSON data to an object
    const data = await response.json();
    console.log(data);
};

export default getApiData;
