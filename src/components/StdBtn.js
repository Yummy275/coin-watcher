import React from 'react';

const StdBtn = ({ string, handleClick, size }) => {
    return (
        <button
            onClick={handleClick}
            className={`${
                size ? `w-${size}` : 'w-28'
            } h-11 bg-englishLavender rounded border border-spaceCadet`}
        >
            {string}
        </button>
    );
};

export default StdBtn;
