import React from 'react';

const style = {
    bar: 'h-12 flex justify-center items-center text-center mt-3',
    link: 'p-1 underline cursor-pointer',
};

const Attribution = () => {
    return (
        <div className={style.bar}>
            <a
                href="https://nomics.com/"
                target="_blank"
                rel="noreferrer"
                className={style.link}
            >
                Crypto Market Cap & Pricing Data Provided By Nomics
            </a>
        </div>
    );
};

export default Attribution;
