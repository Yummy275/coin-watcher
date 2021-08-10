import React, { useState, useEffect } from 'react';
import './App.css';
import getCoinsInfoFromApi from './api/getCoinsInfoFromApi';
import getAvailableCoins from './api/getAvailableCoins';
import loadSavedCoins from './data/loadSavedCoins';
import getSavedCoinSymbols from './data/getSavedCoinSymbols';
import getHoldAmount from './data/getHoldAmount';
import DoughnutChart from './components/DoughnutChart';
import Topbar from './components/Topbar';
import CoinsSection from './components/CoinsSection';
import Loading from './components/Loading';

const currentCoins = loadSavedCoins();

function App() {
    return (
        <div className="min-h-screen h-screen bg-white">
            <Topbar />
            <div className="md:flex">
                <CoinsSection />
                <Loading />
            </div>
        </div>
    );
}

export default App;
