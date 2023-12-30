/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                hero: "url('/assets/images/bg-hero.webp')",
                'hero-mobile': "url('/assets/images/bg-hero-mobile.webp')",
            },
            flex: {
                2: '2 2 0%',
            },
            screens: {
                xsm: '400px',
            },
            backgroundColor: {
                dark: '#0d1117',
                grey: '#848D97',
            },

            fontFamily: {
                sans: ['Mona-Sans'],
                'sans-md': ['Mona-Sans-Medium'],
                'sans-b': ['Mona-Sans-Bold'],
            },
        },
    },
    plugins: [],
};
