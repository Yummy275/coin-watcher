import React from 'react';

const style = {
    bar: 'bg-spaceCadet h-16 flex justify-center items-center',
    link: 'underline cursor-pointer',
};

const Attribution = () => {
    return (
        <div className={style.bar}>
            <a className={style.link}>
                Crypto Market Cap & Pricing Data Provided By Nomics
            </a>
        </div>
    );
};

export default Attribution;
