import React, { useState } from 'react';
import './App.css';
import MainDisplay from './components/MainDisplay';
import Loading from './components/Loading';

function App() {
    const [loading, setLoading] = useState(true);

    return (
        <div className="min-h-screen h-screen bg-white">
            {loading ? <Loading /> : <MainDisplay />}
        </div>
    );
}

export default App;
