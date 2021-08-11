import React from 'react';
import Topbar from './Topbar';
import CoinsSection from './CoinsSection';

const MainDisplay = () => {
    return (
        <>
            <Topbar />
            <div className="md:flex">
                <CoinsSection />
            </div>
        </>
    );
};

export default MainDisplay;
