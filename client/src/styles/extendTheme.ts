import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { ButtonStyle as Button } from './styleComponents/ButtonStyle'

// 2. Extend the theme to include custom colors, fonts, etc
export const myTheme = extendTheme(
  withDefaultColorScheme({
    colorScheme: 'indigo',
    components: ['Button'],
  }),
  {
    initialColorMode: 'dark',
    colors: {
      indigo: {
        50: '#EFF6FF',
        100: '#DBEAFE',
        200: '#3B82F6', // dark
        300: '#93C5FD',
        400: '#60A5FA',
        500: '#3B82F6',
        600: '#3B82F6', // Light
        700: '#1D4ED8',
      },
    },
    fonts: {
      chivo: 'chivo',
      montserrat: 'montserrat',
    },

    components: {
      Button,
    },
  }
)
