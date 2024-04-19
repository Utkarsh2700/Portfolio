/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        listStyleType: {
            none: 'none',
            disc: 'disc',
            decimal: 'decimal',
            square: 'square',
            roman: 'upper-roman',
        },
        extend: {
            backgroundImage: (theme) => ({
                'radial-gradient': 'radial-gradient(farthest-corner at 40px 40px, #816F68 19%, #080A0C 58%)',
                'radial-gradient2': 'radial-gradient(farthest-corner at 90% 90%, #816F68 10%, #080A0C 60%)',
            }),

            // backgroundImage: (theme) => ({
            //     'linear-gradient': 'linear-gradient(45deg, #C9C9EE, #080A0C)',
            // }),
            colors: {
                'midnight-black': '#080A0C',
                'peri-winkle': '#C9C9EE',
                'pastel-brown': '#816F68',
            },
            // backgroundImage: {
            //     'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
            //     'conic-gradient': 'conic-gradient(from 225deg, #C9C9EE,#BAABBD, #080A0C, #8d7471,#816F68 )',
            // },
        },
    },
    plugins: [],
};
