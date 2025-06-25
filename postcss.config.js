// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {}, // ✅ required with Tailwind v4 + Next.js 15
    autoprefixer: {},
  },
};
