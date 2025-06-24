/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Required for class-based dark theme toggling
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",        // Your App directory
    "./components/**/*.{js,ts,jsx,tsx}", // Your reusable components
    "./data/**/*.{js,ts,jsx,tsx}",       // Optional: if you style anything in `data/`
  ],
  theme: {
    extend: {
      // Optional: Customize your dark/light colors if needed
      colors: {
        brand: {
          light: "#f0f4ff",
          dark: "#0f172a",
        },
      },
      transitionProperty: {
        width: 'width',
        spacing: 'margin, padding',
      },
    },
  },
  plugins: [],
};
