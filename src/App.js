import React, { useState, useEffect } from 'react';
import './App.css';
import getCoinsInfoFromApi from './api/getCoinsInfoFromApi';
import getAvailableCoins from './api/getAvailableCoins';
import Navbar from './components/Navbar';
import CoinHolder from './components/CoinHolder';
import NoSavedCoinsSign from './components/NoSavedCoinsSign';
import AddCoinModal from './components/AddCoinModal';

const savedCoins = localStorage.getItem('savedCoins');

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
        const fetchSavedCoinsData = async () => {
            console.log('fetching saved data');
            if (savedCoins === null) {
                setSavedCoinsData('none');
            } else {
                const savedCoinSymbols = getSavedCoinsSymbols();
                const data = await getCoinsInfoFromApi(savedCoinSymbols);
                setSavedCoinsData(data);
            }
        };
        //fetchSavedCoinsData();
    }, []);

    useEffect(() => {
        const fetchAvailableCoins = async () => {
            const data = await getAvailableCoins();
            console.log('fetching available coins');
            const filteredArr = [];
            data.forEach((coin) => {
                if (coin.logo_url != '') {
                    filteredArr.push(coin);
                }
            });
            setAvailableCoins(filteredArr);
        };
        //fetchAvailableCoins();
    }, []);

    return (
        <>
            <AddCoinModal></AddCoinModal>
            <Navbar availableCoins={availableCoins}></Navbar>
            {savedCoins === null ? (
                <NoSavedCoinsSign></NoSavedCoinsSign>
            ) : (
                <CoinHolder coinsData={savedCoinsData}></CoinHolder>
            )}
        </>
    );
}

export default App;
