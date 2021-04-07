import React from 'react';

const StdBtn = ({ string, handleClick }) => {
    return (
        <button
            onClick={handleClick}
            className="w-28 h-11 bg-englishLavender rounded border border-spaceCadet"
        >
            {string}
        </button>
    );
};

export default StdBtn;
