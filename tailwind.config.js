import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './resources/**/*.{ts,tsx,js,jsx,php,html}',
        './vendor/mxent/*/resources/**/*.{ts,tsx,js,jsx,php,html}',
    ],
    theme: {
        fontFamily: {
            sans: ['Inter', ...defaultTheme.fontFamily.sans],
            mono: [...defaultTheme.fontFamily.mono],
        },
    },
};
