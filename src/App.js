import React, { useState, useEffect } from 'react';
import './App.css';
import getCoinsInfoFromApi from './api/getCoinsInfoFromApi';
import CoinHolder from './components/CoinHolder';

const savedCoins = {
    btc: { symbol: 'BTC', amount: '12.03' },
    eth: { symbol: 'ETH', amount: '1' },
};

const getSavedCoinsSymbols = () => {
    const symbols = [];
    for (const coin in savedCoins) {
        symbols.push(savedCoins[coin].symbol);
    }
    return symbols;
};

function App() {
    const [coinsData, setCoinsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const savedCoinSymbols = getSavedCoinsSymbols();
            const data = await getCoinsInfoFromApi(savedCoinSymbols);
            setCoinsData(data);
        };
        fetchData();
    }, []);

    return coinsData === [] ? (
        ''
    ) : (
        <CoinHolder coinsData={coinsData}></CoinHolder>
    );
}

export default App;
