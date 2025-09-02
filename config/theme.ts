'use client'

import type { GlobalStylesProps, ThemeOptions } from '@mui/material'
import { createTheme } from '@mui/material'
import { grey } from '@mui/material/colors'

export const globalStyles: GlobalStylesProps['styles'] = () => ({
  '*::-webkit-scrollbar-track': {
    backgroundColor: grey[200],
  },
  '*::-webkit-scrollbar': {
    width: 8,
    backgroundColor: '#F5F5F5',
  },
  '*::-webkit-scrollbar-thumb': {
    backgroundColor: grey[500],
    borderRadius: 12,
  },
  'audio::-webkit-media-controls-enclosure': {
    borderRadius: 12,
  },
  'a': {
    textDecoration: 'none !important',
  },
})

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#0070B8',
      dark: '#09324eff',
      light: '#347eafff',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#fcba07ff',
      dark: '#EDC967',
      light: '#F7EF8A',
      contrastText: '#000',
    },
    background: {
      default: '#fcfcfc',
    },
  },
  typography: {
    htmlFontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '1.875rem', // 30px
      lineHeight: 1.5,
    },
    h2: {
      fontSize: '1.5rem', // 24px
      lineHeight: 1.27,
    },
    h3: {
      fontSize: '1.25rem', // 20px
      lineHeight: 1.33,
    },
    h4: {
      fontSize: '1rem', // 16px
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '0.875rem', // 14px
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '0.875rem', // 14px
      lineHeight: 1.57,
    },
    body1: {
      fontSize: '1rem', // 16px
      lineHeight: 1.57,
    },
    body2: {
      fontSize: '1.125rem', // 18px
      lineHeight: 1.66,
    },
    subtitle1: {
      fontSize: '1rem', // 16px
      lineHeight: 1.57,
    },
    subtitle2: {
      fontSize: '0.875rem', // 14px
      lineHeight: 1.66,
    },
    caption: {
      fontSize: '0.75rem', // 12px
      lineHeight: 1.66,
    },
    overline: {
      lineHeight: 1.66,
    },
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
    @font-face {
      font-family: 'YekanBakh';
      font-style: normal;
      font-weight: 100;
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum01Hairline.eot");
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum01Hairline.eot?#iefix")
        format("embedded-opentype");
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum01Hairline.woff")
        format("woff");
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum01Hairline.ttf")
        format("truetype");
    }
    
    @font-face {
      font-family: 'YekanBakh';
      font-style: normal;
      font-weight: 200;
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum02Thin.eot");
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum02Thin.eot?#iefix")
        format("embedded-opentype");
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum02Thin.woff")
        format("woff");
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum02Thin.ttf")
        format("truetype");
    }
    
    @font-face {
      font-family: 'YekanBakh';
      font-style: normal;
      font-weight: 300;
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum03Light.eot");
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum03Light.eot?#iefix")
        format("embedded-opentype");
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum03Light.woff")
        format("woff");
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum03Light.ttf")
        format("truetype");
    }
    
    @font-face {
      font-family: 'YekanBakh';
      font-style: normal;
      font-weight: 400;
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum04Regular.eot");
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum04Regular.eot?#iefix")
        format("embedded-opentype");
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum04Regular.woff")
        format("woff");
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum04Regular.ttf")
        format("truetype");
    }
    
    @font-face {
      font-family: 'YekanBakh';
      font-style: normal;
      font-weight: 500;
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum05Medium.eot");
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum05Medium.eot?#iefix")
        format("embedded-opentype");
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum05Medium.woff")
        format("woff");
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum05Medium.ttf")
        format("truetype");
    }
    
    @font-face {
      font-family: 'YekanBakh';
      font-style: normal;
      font-weight: 600;
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum06Bold.eot");
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum06Bold.eot?#iefix")
        format("embedded-opentype");
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum06Bold.woff")
        format("woff");
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum06Bold.ttf")
        format("truetype");
    }
    
    @font-face {
      font-family: 'YekanBakh';
      font-style: normal;
      font-weight: 700;
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum07Heavy.eot");
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum07Heavy.eot?#iefix")
        format("embedded-opentype");
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum07Heavy.woff")
        format("woff");
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum07Heavy.ttf")
        format("truetype");
    }
    
    @font-face {
      font-family: 'YekanBakh';
      font-style: normal;
      font-weight: 800;
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum08Fat.eot");
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum08Fat.eot?#iefix")
        format("embedded-opentype");
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum08Fat.woff")
        format("woff");
      src: url("/assets/fonts/yekanBakh/YekanBakhFaNum08Fat.ttf")
        format("truetype");
    }
    `,
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1266,
      xl: 1536,
    },
  },
}

export const defaultTheme = createTheme({
  ...themeOptions,
})

export const persianTheme = createTheme({
  ...themeOptions,
  direction: 'rtl',
  typography: {
    ...themeOptions.typography,
    fontFamily: 'YekanBakh,  sans-serif',
  },
})
