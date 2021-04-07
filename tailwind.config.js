module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        borderRadius: {
            circle: '100%',
        },
        extend: {
            colors: {
                pinkLace: '#F0D3F7',
                operaMauve: '#B98EA7',
                englishLavender: '#A57982',
                spaceCadet: '#302F4d',
                russianViolet: '#120D31',
                white: '#f9f9f9',
                black: '#040F16',
            },
            keyframes: {
                coinSpin: {
                    '0%': { transform: 'rotateY(0deg)' },
                    '100%': { transform: 'rotateY(360deg)' },
                },
            },
            animation: {
                coinSpin: 'coinSpin 2s ease-in-out infinite',
            },
        },
        inset: {
            '1/10': '10%',
            12: '3rem',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
