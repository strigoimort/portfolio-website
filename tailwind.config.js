/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,ts,jsx,tsx,html}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5A4FC0',
          light: '#7C73D6',
          dark: '#3E35A3',
        },
        secondary: '#1e293b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
      fontFamily: {
        sans: [
          // 'Inter',
          // 'sans-serif',
          '-apple-system',
          'BlinkMacSystemFont',
          'San Francisco',
          'Helvetica Neue',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ],
      },
    },
  },
  plugins: [],
};

