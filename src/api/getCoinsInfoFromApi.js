const getCoinsInfoFromApi = async (coins) => {
    const coinNames = coins.join(',');
    const apiKey = process.env.REACT_APP_API_KEY;
    const target = `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=${coinNames}&interval=1h,1d,30d`;
    const response = await fetch(target);
    const data = await response.json();
    return data;
};

export default getCoinsInfoFromApi;
