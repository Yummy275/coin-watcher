module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            spacing: {
                99: '22rem',
                102: '32rem',
            },

            colors: {
                whitePurple: '#ead3ef',
                black: '#0C0F0A',
                white: '#EEF4ED',
                lightPurple: '#BC9EC1',
                red: '#ad0000',
            },
            backgroundImage: {
                lightPurpleToWhiteGradientDown:
                    'linear-gradient(to bottom, #bc9ec1, #dbafb7, #e4c6ba, #e5dfcf, #eef4ed);',
                eyeOutline: "url('/src/images/eye.png')",
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
