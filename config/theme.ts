'use client'

import type { GlobalStylesProps, ThemeOptions } from '@mui/material'
import { createTheme } from '@mui/material'
import Link from 'next/link'
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
      main: '#2747f0',
      light: '#36b89f',
      dark: '#02664f',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#017FED',
      dark: '#3D68B5',
      light: '#A2CBF3',
      contrastText: '#FFF',
    },
    background: {
      default: '#111928',
      paper: '#FFF',
    },

  },
  typography: {
    fontFamily: 'Inter, sans-serif',
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
    MuiListItem: {
      defaultProps: {
        disableGutters: true,
        disablePadding: true,
      },
    },

    MuiBottomNavigationAction: {
      defaultProps: {
        component: Link,
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
               font-family: 'yekanBakh';
               src: url('/assets/fonts/yekanBakh/woff/IRANSansWeb.woff') format('woff');
               font-weight: 500;
               font-style: normal;
             }`,
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
    fontFamily: 'yekanBakh, noto-Arabic',
  },
})
