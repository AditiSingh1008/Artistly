/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or false
  theme: {
    extend: {
      colors: {
        primary: '#a78bfa', // pastel purple
        secondary: '#fbcfe8', // pastel pink
        backgroundLight: '#ffe4e6', // light pink background
        backgroundDark: '#1e293b', // dark background
      },
      borderRadius: {
        'lg': '1rem',
        'xl': '1.5rem',
      },
      boxShadow: {
        card: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
