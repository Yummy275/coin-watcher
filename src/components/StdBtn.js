import React from 'react';

const StdBtn = ({ string, handleClick }) => {
    return (
        <button
            onClick={handleClick}
            className="h-11 bg-englishLavender rounded border border-spaceCadet py-2 px-3 mb-2"
        >
            {string}
        </button>
    );
};

export default StdBtn;
