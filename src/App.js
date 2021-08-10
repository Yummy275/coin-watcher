import React, { useState, useEffect } from 'react';
import './App.css';
import getCoinsInfoFromApi from './api/getCoinsInfoFromApi';
import getAvailableCoins from './api/getAvailableCoins';
import loadSavedCoins from './data/loadSavedCoins';
import getSavedCoinSymbols from './data/getSavedCoinSymbols';
import getHoldAmount from './data/getHoldAmount';
import DoughnutChart from './components/DoughnutChart';

const currentCoins = loadSavedCoins();

function App() {
    return (
        <div>
            <div>hello</div>
        </div>
    );
}

export default App;
