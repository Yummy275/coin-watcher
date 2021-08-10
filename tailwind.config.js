module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        borderRadius: {
            circle: '100%',
        },
        extend: {
            colors: {
                red: '#95190C',
                purple: '#610345',
                black: '#0C0F0A',
                white: '#EEF4ED',
                lightPurple: '#BC9EC1',
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
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
