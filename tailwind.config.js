/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#014f51',
        dark: '#0f172a',
        begron: '#f8f7f1',
        gue: '#6BA3BE',
      },
      screens:{
        '2xl': '1320px',
      },
      fontFamily: {
        ProtestRevolution:['Protest Revolution'],
        Abel:['Abel'],
        Oswald:['Oswald'],
        BarlowCondensed:['BarlowCondensed'],
      },
    },
  },
  plugins: [],
}

