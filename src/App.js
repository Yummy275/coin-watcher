import React, { useState, useEffect } from 'react';
import './App.css';
import getCoinsInfoFromApi from './api/getCoinsInfoFromApi';
import getAvailableCoins from './api/getAvailableCoins';
import loadSavedCoins from './data/loadSavedCoins';
import getSavedCoinSymbols from './data/getSavedCoinSymbols';
import Navbar from './components/Navbar';
import CoinHolder from './components/CoinHolder';
import NoSavedCoinsSign from './components/NoSavedCoinsSign';
import LoadingBalls from './components/LoadingBalls';
import AddCoinModal from './components/AddCoinModal';

const currentCoins = loadSavedCoins();

function App() {
    const [savedCoinsData, setSavedCoinsData] = useState('loading');
    const [availableCoins, setAvailableCoins] = useState([]);
    const [newCoinSymbol, setNewCoinSymbol] = useState('');

    const updateSavedCoins = async () => {
        const savedCoinSymbols = getSavedCoinSymbols();
        setSavedCoinsData('loading');
        const data = await getCoinsInfoFromApi(savedCoinSymbols);
        setSavedCoinsData(data);
    };

    useEffect(() => {
        const fetchSavedCoinsData = async () => {
            console.log('fetching saved data');
            if (currentCoins !== null) {
                updateSavedCoins();
            } else {
                setSavedCoinsData(null);
            }
        };
        setTimeout(() => fetchSavedCoinsData(), 3000);
    }, []);

    useEffect(() => {
        const fetchAvailableCoins = async () => {
            const data = await getAvailableCoins();
            console.log('fetching available coins');
            const filteredArr = [];
            data.forEach((coin) => {
                if (coin.logo_url !== '' && coin.description !== '') {
                    filteredArr.push(coin);
                }
            });
            setAvailableCoins(filteredArr);
        };
        fetchAvailableCoins();
    }, []);

    const hideModal = () => {
        setNewCoinSymbol('');
    };

    return (
        <>
            {newCoinSymbol !== '' ? (
                <AddCoinModal
                    hideModal={hideModal}
                    symbol={newCoinSymbol}
                    updateSavedCoins={updateSavedCoins}
                ></AddCoinModal>
            ) : (
                ''
            )}
            <Navbar
                availableCoins={availableCoins}
                setNewCoinSymbol={setNewCoinSymbol}
            ></Navbar>
            {savedCoinsData === null ? (
                <NoSavedCoinsSign></NoSavedCoinsSign>
            ) : savedCoinsData === 'loading' ? (
                <LoadingBalls></LoadingBalls>
            ) : (
                <CoinHolder coinsData={savedCoinsData}></CoinHolder>
            )}
        </>
    );
}

export default App;
