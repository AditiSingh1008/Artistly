// tailwind.config.js
export default {
  darkMode: 'class', // ✅ Required for manual toggling
  content: [
    './app/**/*.{js,ts,jsx,tsx}',        // ✅ Includes all app pages/components
    './components/**/*.{js,ts,jsx,tsx}', // ✅ Includes all custom components
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'], // ✅ Clean readable font
      },
    },
  },
  plugins: [], // ✅ You can add plugins like @tailwindcss/forms if needed
};
