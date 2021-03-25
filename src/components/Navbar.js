import React from 'react';

const styles = {
    navbar: `relative h-12 flex justify-center items-center bg-englishLavender`,
    searchInput: `h-3/4 rounded-md p-1 bg-white`,
    searchBox: 'absolute h-24 w-56 top-12 bg-englishLavender',
};

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <input className={styles.searchInput} placeholder="Search"></input>
            <div className={styles.searchBox}></div>
        </div>
    );
};

export default Navbar;
