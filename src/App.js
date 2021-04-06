import React, { useState, useEffect } from 'react';
import './App.css';
import getCoinsInfoFromApi from './api/getCoinsInfoFromApi';
import getAvailableCoins from './api/getAvailableCoins';
import Navbar from './components/Navbar';
import CoinHolder from './components/CoinHolder';

//will be loaded from local storage
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
    const [savedCoinsData, setSavedCoinsData] = useState([]);
    const [availableCoins, setAvailableCoins] = useState([]);

    useEffect(() => {
        const fetchSavedCoinData = async () => {
            const savedCoinSymbols = getSavedCoinsSymbols();
            const data = await getCoinsInfoFromApi(savedCoinSymbols);
            setSavedCoinsData(data);
        };
        //fetchSavedCoinsData();
    }, []);

    useEffect(() => {
        const fetchAvailableCoins = async () => {
            const data = await getAvailableCoins();
            console.log('fetching available coins');
            console.log(data);
            const filteredArr = [];
            data.forEach((coin) => {
                if (coin.logo_url != '') {
                    filteredArr.push(coin);
                }
            });
            setAvailableCoins(filteredArr);
        };
        fetchAvailableCoins();
    }, []);

    return (
        <>
            <Navbar availableCoins={availableCoins}></Navbar>
        </>
    );
}

export default App;
