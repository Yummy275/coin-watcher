import React, { useState, useEffect } from 'react';
import './App.css';
import getCoinsInfoFromApi from './api/getCoinsInfoFromApi';
import getAvailableCoins from './api/getAvailableCoins';
import loadSavedCoins from './data/loadSavedCoins';
import getSavedCoinSymbols from './data/getSavedCoinSymbols';
import getHoldAmount from './data/getHoldAmount';
import Navbar from './components/Navbar';
import CoinHolder from './components/CoinHolder';
import NoSavedCoinsSign from './components/NoSavedCoinsSign';
import Attribution from './components/Attribution';
import LoadingBalls from './components/LoadingBalls';
import AddCoinModal from './components/AddCoinModal';
import DoughnutChart from './components/DoughnutChart';

const currentCoins = loadSavedCoins();

function App() {
    const [savedCoinsData, setSavedCoinsData] = useState('loading');
    const [chartData, setChartData] = useState('');
    const [availableCoins, setAvailableCoins] = useState([]);
    const [newCoinSymbol, setNewCoinSymbol] = useState('');

    const updateRatioChart = (data) => {
        const coinArr = [];
        for (var i = 0; i < data.length; i++) {
            const holdAmount = getHoldAmount(data[i].symbol);
            const totalAmountWorth = holdAmount * data[i].price;
            const round = totalAmountWorth.toFixed(2);
            const backToNumber = Number(round);
            const coinObject = {
                symbol: data[i].symbol,
                totalWorth: backToNumber,
            };
            coinArr.push(coinObject);
        }
        setChartData(coinArr);
    };

    const updateSavedCoins = async () => {
        const savedCoinSymbols = getSavedCoinSymbols();
        console.log(savedCoinSymbols);
        setSavedCoinsData('loading');
        if (savedCoinSymbols.length === 0) {
            console.log('hello');
            setSavedCoinsData(null);
        } else {
            const data = await getCoinsInfoFromApi(savedCoinSymbols);
            updateRatioChart(data);
            setSavedCoinsData(data);
        }
    };

    useEffect(() => {
        const fetchSavedCoinsData = async () => {
            console.log('fetching saved data');
            if (currentCoins !== null && currentCoins.length !== 0) {
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
                <>
                    <CoinHolder
                        coinsData={savedCoinsData}
                        updateSavedCoins={updateSavedCoins}
                    ></CoinHolder>
                    <div
                        style={{ maxWidth: '30rem' }}
                        className="mx-auto text-center my-4"
                    >
                        <p className="text-2xl text-black mb-4">Coins Ratio</p>
                        <DoughnutChart data={chartData}></DoughnutChart>
                    </div>
                </>
            )}
            <Attribution></Attribution>
        </>
    );
}

export default App;
