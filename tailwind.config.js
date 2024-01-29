/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        // 'node_modules/flowbite-react/lib/esm/**/*.js'
    ],
    theme: {
        extend: {
            colors: {
                gray: {
                    100: '#9ca3af40',
                    200: '#D5DAE1',
                },
                black: {
                    DEFAULT: '#000',
                    500: '#1D2235',
                },
                blue: {
                    500: '#2b77e7',
                    700: '#0a59cc'
                },
                
            },
            fontFamily: {
                worksans: ['Work Sans', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
                ubuntu: ['Ubuntu Medium', 'sans-serif'],
                roboto: ['Roboto Medium', 'sans-serif'],
            },
            boxShadow: {
                card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
            },
            screens: {
                sm: { max: '768px' },
                md: { min: '768px', max: '991px' },
                lg: { min: '991px', max: '1240px' },
                xl: { min: '1240px' },
            },
        },
    },
    // plugins: [require('flowbite/plugin')],
};
