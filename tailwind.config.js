module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ifbeige: {
          DEFAULT: '#FFF4E0'
        },
        iflightblue: {
          DEFAULT: '#033CE0'
        },
        ifblue: {
          DEFAULT: '#1D0070'
        },
        iflightgray:{
          DEFAULT: '#ECECEC',
        },
        ifgray: {
          DEFAULT: '#6A737D'
        },
        iforange: {
          DEFAULT: '#FFA542'
        },
        ifpink: {
          DEFAULT: '#FF94DB'
        },
      },
      fontFamily: {
        'favorit': ['favorit-regular', 'helvetica', 'sans-serif'],
        'extended': ['extended-regular', 'helvetica', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}