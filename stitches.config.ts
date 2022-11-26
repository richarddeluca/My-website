import { createStitches, createTheme } from '@stitches/react'
import { playfair, raleway } from './pages/_app'

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    fonts: {
      system: playfair.style.fontFamily,
      title: raleway.style.fontFamily,
    },
    colors: {
      backPrimary: '#212121',
      backSecondary: '#292929',
      backTertiary: '#414141',
      frontPrimary: '#e2e2e2',
      frontSecondary: '#98989a',
      frontTertiary: '#717171',
      frontSpecial: '#5C22BF',
      backSpecial: '#60647a',
      blogSpecial: '#ca5',
      headerButtonsBg: '#21212133',
      headerButtonsFt: '#e2e2e2',
    },

    fontSizes: {
      pp: '8px',
      p: '12px',
      m: '16px',
      l: '20px',
      xl: '24px',
      '3xl': '40px',
    },
    sizes: {
      maxWidth: '1200px',
    },
  },
})

const GlobalStyles = globalCss({
  '*': {
    padding: '0',
    margin: '0',
    boxSizing: 'border-box',
  },

  body: {
    background: '$backPrimary',
    color: '$frontPrimary',
    fontFamily: '$system',
  },

  'h1, h2, h3': {
    fontFamily: '$title',
    fontWeight: '400',
  },
  li: {
    listStyle: 'none',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  button: {
    border: 0,
    backgroundColor: 'white',
    color: '$frontPrimary',
  },
})

export const lightTheme = createTheme({
  colors: {
    backPrimary: '#e6e5ec',
    backSecondary: '#dbd9df',
    backTertiary: '#938e9d',
    frontPrimary: '#2f2f40',
    frontSecondary: '#3f3f53',
    frontTertiary: '#545a79',
    frontSpecial: '#5C22BF',
    backSpecial: '#332f6f',
    blogSpecial: '#ddbb55',
    headerButtonsBg: 'transparent',
    headerButtonsFt: '#565696',
  },
})

GlobalStyles()
// FC6471
