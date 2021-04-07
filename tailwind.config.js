module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                pinkLace: '#F0D3F7',
                operaMauve: '#B98EA7',
                englishLavender: '#A57982',
                spaceCadet: '#302F4d',
                russianViolet: '#120D31',
                white: '#f9f9f9',
            },
        },
        inset: {
            '1/10': '10%',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
