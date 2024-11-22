import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        'primary': {
          ...colors.emerald,
          DEFAULT: colors.emerald[600],
          'foreground': colors.emerald[50],
        }
      },
      fontFamily: {
        'body': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'big': ['5rem', '5.5rem'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      }
    },
  },
  plugins: [],
}

