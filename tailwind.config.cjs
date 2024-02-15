/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans-serif': ['Source Sans Pro', 'sans-serif'],
      mono: ['Source Code Pro', 'monospace'],
      handwriting: ['Kalam', 'cursive']
    },
    extend: {
      backgroundImage: {
        circle: "url('/images/circle.svg')"
      },
      borderWidth: {
        1: '1px'
      },
      boxShadow: {
        colored: '0px 7px 16px rgba(127, 91, 220, 0.002)',
        'colored-hover': '0px 16px 25px rgba(127, 91, 220, 0.3)',
        'table-row': '0px 0px 6px rgba(0, 0, 0, 0.16)'
      },
      colors: {
        'blue-gem': '#3813a0',
        'caribbean-green': '#00ca9e',
        'daisy-bush': '#4714a5',
        'golden-fizz': '#feff40',
        'lavender-indigo': '#8657e1',
        'pastel-purple': '#b2a1bb',
        'robin-egg-blue': '#00e9c0',
        fog: '#decaec',
        gallery: '#efeaf2',
        monsoon: '#777878',
        purple: '#7209b7',
        scarlet: '#f72f45',
        silver: '#c0c0c0',
        whisper: '#f9f4f9'
      },
      gridTemplateColumns: {
        'invoice-table': '100px 100px 60px 1fr 116px 32px 32px',
        'invoice-table-mobile': '1fr 90px'
      },
      zIndex: {
        'nav-bar': 90,
        'nav-bar-toggle': 91
      }
    }
  },
  plugins: []
};
