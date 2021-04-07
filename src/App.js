import React, { useState, useEffect } from 'react';
import './App.css';
import getCoinsInfoFromApi from './api/getCoinsInfoFromApi';
import getAvailableCoins from './api/getAvailableCoins';
import Navbar from './components/Navbar';
import CoinHolder from './components/CoinHolder';
import NoSavedCoinsSign from './components/NoSavedCoinsSign';
import AddCoinModal from './components/AddCoinModal';

function App() {
    const [savedCoinsData, setSavedCoinsData] = useState('none');
    const [availableCoins, setAvailableCoins] = useState([]);
    const [newCoinSymbol, setNewCoinSymbol] = useState('');

    useEffect(() => {
        const fetchSavedCoinsData = async () => {
            const savedCoins = localStorage.getItem('savedCoins');
            console.log('fetching saved data');
            if (savedCoins === null) {
                setSavedCoinsData('none');
            } else {
            }
        };
        fetchSavedCoinsData();
    }, []);

    useEffect(() => {
        const fetchAvailableCoins = async () => {
            const data = await getAvailableCoins();
            console.log('fetching available coins');
            const filteredArr = [];
            data.forEach((coin) => {
                if (coin.logo_url !== '') {
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
                ></AddCoinModal>
            ) : (
                ''
            )}
            <Navbar
                availableCoins={availableCoins}
                setNewCoinSymbol={setNewCoinSymbol}
            ></Navbar>
            {savedCoinsData === 'none' ? (
                <NoSavedCoinsSign></NoSavedCoinsSign>
            ) : (
                <CoinHolder coinsData={savedCoinsData}></CoinHolder>
            )}
        </>
    );
}

export default App;
