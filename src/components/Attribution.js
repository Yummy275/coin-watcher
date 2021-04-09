import React from 'react';

const style = {
    bar: 'bg-spaceCadet h-16 flex justify-center items-center text-center',
    link: 'p-1 underline cursor-pointer',
};

const Attribution = () => {
    return (
        <div className={style.bar}>
            <a
                href="https://nomics.com/"
                target="_blank"
                className={style.link}
            >
                Crypto Market Cap & Pricing Data Provided By Nomics
            </a>
        </div>
    );
};

export default Attribution;
