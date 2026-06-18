/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      // Brand tokens are inlined via the T object in src/styles/tokens.js
      // (kept out of Tailwind so they're trivially overridable from JS).
      fontFamily: {
        display: ["'Fraunces'", 'Georgia', 'serif'],
        body: ["'Outfit'", 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
