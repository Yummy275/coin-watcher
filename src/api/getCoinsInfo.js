const getCoinsInfo = async (coins) => {
    const coinNames = coins.join(',');
    const apiKey = process.env.REACT_APP_API_KEY;
    const target = `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=${coinNames}`;
    const response = await fetch(target);
    const data = await response.json();
    return data;
};

export default getCoinsInfo;
