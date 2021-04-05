import React, { useRef, useState } from 'react';

const styles = {
    navbar: `relative h-12 flex justify-center items-center bg-englishLavender`,
    searchInput: `h-3/4 rounded-md p-1 bg-white`,
    searchBox:
        'transition-all duration-1000 absolute w-60 top-12 bg-englishLavender',
};

const Navbar = () => {
    const searchInput = useRef();
    const [searchBoxHidden, setSearchBoxHidden] = useState(true);

    return (
        <div className={styles.navbar}>
            <input
                onFocus={() => setSearchBoxHidden(false)}
                onBlur={() => setSearchBoxHidden(true)}
                ref={searchInput}
                className={styles.searchInput}
                placeholder="Search"
            ></input>
            <div
                className={`${styles.searchBox} ${
                    searchBoxHidden ? 'h-0' : 'h-48'
                }`}
            ></div>
        </div>
    );
};

export default Navbar;
