/** @type {import('tailwindcss').Config} */

const colors = {
  primary: '#00b2bd',
  secondary: '#3699c5',
  tertiary: '#156c7a',
  neutral: '#ffffff',
  accent: '#000000',
};

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors
    },
  },
  plugins: [],
}

