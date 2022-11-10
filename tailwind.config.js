const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'backdrop-1': 'rgba(0, 0, 0, 0.1)',
        'backdrop-2': 'rgba(0, 0, 0, 0.2)',
        'backdrop-3': 'rgba(0, 0, 0, 0.3)',
        'backdrop-4': 'rgba(0, 0, 0, 0.4)',
        'backdrop-5': 'rgba(0, 0, 0, 0.5)',
        'backdrop-6': 'rgba(0, 0, 0, 0.6)',
        'backdrop-7': 'rgba(0, 0, 0, 0.7)',
        'backdrop-8': 'rgba(0, 0, 0, 0.8)',
        'backdrop-9': 'rgba(0, 0, 0, 0.9)',
      },

      screens: {
        'tab-land': '1200px',
        'tab-port': '900px',
      },

      backgroundImage: {
        'scroll-1': "url('/images/home/scroll-10.jpg')",
        'scroll-2': "url('/images/home/scroll-11.jpeg')",
        'scroll-3': "url('/images/home/scroll-12.jpg')",
        'scroll-4': "url('/images/home/scroll-13.jpeg')",
      },

      fontFamily: {
        'montserrat-n100': ['Montserrat n100', 'sans-serif'],
        'montserrat-n200': ['Montserrat n200', 'sans-serif'],
        'montserrat-n300': ['Montserrat n300', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        'montserrat-n500': ['Montserrat n500', 'sans-serif'],
        'montserrat-n600': ['Montserrat n600', 'sans-serif'],
        'montserrat-n700': ['Montserrat n700', 'sans-serif'],
        'montserrat-n800': ['Montserrat n800', 'sans-serif'],
        'montserrat-n900': ['Montserrat n900', 'sans-serif'],
        'montserrat-i100': ['Montserrat i100', 'sans-serif'],
        'montserrat-i200': ['Montserrat i200', 'sans-serif'],
        'montserrat-i300': ['Montserrat i300', 'sans-serif'],
        'montserrat-i': ['Montserrat i', 'sans-serif'],
        'montserrat-i500': ['Montserrat i500', 'sans-serif'],
        'montserrat-i600': ['Montserrat i600', 'sans-serif'],
        'montserrat-i700': ['Montserrat i700', 'sans-serif'],
        'montserrat-i800': ['Montserrat i800', 'sans-serif'],
        'montserrat-i900': ['Montserrat i900', 'sans-serif'],
        'raleway-n100': ['Raleway n100', 'sans-serif'],
        'raleway-n200': ['Raleway n200', 'sans-serif'],
        'raleway-n300': ['Raleway n300', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        'raleway-n500': ['Raleway n500', 'sans-serif'],
        'raleway-n600': ['Raleway n600', 'sans-serif'],
        'raleway-n700': ['Raleway n700', 'sans-serif'],
        'raleway-n800': ['Raleway n800', 'sans-serif'],
        'raleway-n900': ['Raleway n900', 'sans-serif'],
        'raleway-i100': ['Raleway i100', 'sans-serif'],
        'raleway-i200': ['Raleway i200', 'sans-serif'],
        'raleway-i300': ['Raleway i300', 'sans-serif'],
        'raleway-i': ['Raleway i', 'sans-serif'],
        'raleway-i500': ['Raleway i500', 'sans-serif'],
        'raleway-i600': ['Raleway i600', 'sans-serif'],
        'raleway-i700': ['Raleway i700', 'sans-serif'],
        'raleway-i800': ['Raleway i800', 'sans-serif'],
        'raleway-i900': ['Raleway i900', 'sans-serif'],
        'roboto-n100': ['Roboto n100', 'sans-serif'],
        'roboto-n300': ['Roboto n300', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        'roboto-n500': ['Roboto n500', 'sans-serif'],
        'roboto-n700': ['Roboto n700', 'sans-serif'],
        'roboto-n900': ['Roboto n900', 'sans-serif'],
        'roboto-i100': ['Roboto i100', 'sans-serif'],
        'roboto-i300': ['Roboto i300', 'sans-serif'],
        'roboto-i': ['Roboto i', 'sans-serif'],
        'roboto-i500': ['Roboto i500', 'sans-serif'],
        'roboto-i700': ['Roboto i700', 'sans-serif'],
        'roboto-i900': ['Roboto i900', 'sans-serif'],
        'lato-n100': ['Lato n100', 'sans-serif'],
        'lato-n300': ['Lato n300', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        'lato-n700': ['Lato n700', 'sans-serif'],
        'lato-n900': ['Lato n900', 'sans-serif'],
        'lato-i100': ['Lato i100', 'sans-serif'],
        'lato-i300': ['Lato i300', 'sans-serif'],
        'lato-i': ['Lato i', 'sans-serif'],
        'lato-i700': ['Lato i700', 'sans-serif'],
        'lato-i900': ['Lato i900', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@headlessui/tailwindcss'),
    require('tw-elements/dist/plugin'),
    plugin(({ addUtilities }) =>
      addUtilities({
        '.instaGrad': {
          transition: 'add ease-in 1s',
          'background-image':
            'linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)',

          '.background-blur': {
            'background-image':
              'linear-gradient(45deg, rgb(28, 10, 0, 0.8), rgb(28, 10, 0, 0.8))',
          },
        },
      }),
    ),
  ],
}
