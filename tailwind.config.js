/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
    './public/**/*.html',
    './public/**/*.svg',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10212b',
        secondary: '#8fa464',
        transparentBlack: 'rgba(0, 0, 0, 0.8)',
        transparentGray: 'rgba(0, 0, 0, 0.3)',
      },
      variants: {
        extend: {},
      }
      ,
      borderRadius: {
        button: '8px',
      },
    },
  },
  plugins: [],
};



