const getAvailableCoins = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const target = `https://api.nomics.com/v1/currencies?key=${apiKey}&attributes=id,name,logo_url,status`;
    const response = await fetch(target);
    const data = await response.json();
    console.log(data);
    return data;
};

export default getAvailableCoins;
