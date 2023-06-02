/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-primary': '#BE5A4E',
        'custom-secondary': '#ffffff',
      },
    },
  },
  plugins: [],
};
