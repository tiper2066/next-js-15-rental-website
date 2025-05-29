/** @type {import('tailwindcss').Config} */
export const content = [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
    extend: {
        fontFamily: {
            sans: ['"42dot Sans"', 'sans-serif'],
            hahmlet: 'var(--font-hahmlet)', // 클래스: font-hahmlet
        },
    },
};
export const plugins = [];
