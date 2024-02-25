/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      orange: {
        50: '#FFF7ED',
        100: '#FFEAD0',
        200: '#FFDDB2',
        300: '#FFCC8D',
        400: '#FF8C38',
        800: '#E17654',
      },
      green: {
        800: '#115E59',
      },
      neutral: {
        50: '#D1D5DB',
        100: '#C7C7C7',
        200: '#B9B9B9',
        300: '#AAAAAA',
        400: '#8C8C8C',
        500: '#858585',
        600: '#4D4D4D',
        700: '#252525',
        800: '#201F1D',
        900: '#1C1C1C',
        950: '#000000',
      },
      white: '#FFFFFF',
      dark: '#161616',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
