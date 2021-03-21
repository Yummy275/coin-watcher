import React, { useState, useEffect } from 'react';
import './App.css';
import StdBtn from './components/StdBtn';
import getCoinsInfo from './data/getCoinsInfo';

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
    const [coinInfo, setCoinInfo] = useState([]);
    console.log(coinInfo);
    useEffect(() => {
        const fetchData = async () => {
            const savedCoinSymbols = getSavedCoinsSymbols();
            const data = await getCoinsInfo(savedCoinSymbols);
            setCoinInfo(data);
        };
        fetchData();
    }, []);
    return <div>hello</div>;
}

export default App;
