// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: '#FFFFFF',
        secondary: '#5B9AF8',
        variant:'#167EDC',
        background: '#12253A',
        bluebg:'#1B395E',
  
        neutral10: '#000000',
        neutral9: '#050506',
        neutral8: '#101114',
        neutral7: '#191B1E',
        neutral6: '#22252A',
        neutral5: '#292C32',
        neutral4: '',
        neutral3: '',
        neutral2: '',
        neutral1: '',
        neutral0: '#FFFFFF',
  
        info:'#009DDE',
        success:'#2DCD7A',
        warning:'#E9A100',
        error:'#DC7C7C'
      },
      fontFamily:{
        'sans': ['sanfran', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}