import React, { useState } from 'react';
import Topbar from './Topbar';
import CoinsSection from './CoinsSection';
import AddCoinModal from './AddCoinModal';

const MainDisplay = () => {
    const [addingCoinData, setAddingCoinData] = useState(null);

    return (
        <>
            {addingCoinData ? (
                <AddCoinModal
                    coinData={addingCoinData}
                    closeModal={() => setAddingCoinData(null)}
                />
            ) : (
                ''
            )}
            <Topbar setAddingCoinData={setAddingCoinData} />
            <div className="md:flex">
                <CoinsSection />
            </div>
        </>
    );
};

export default MainDisplay;
