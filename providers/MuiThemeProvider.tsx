'use client'

import { ThemeProvider } from '@emotion/react'
import type { FC, PropsWithChildren } from 'react'
import { persianTheme } from '@/config/theme'

const MuiThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    return <ThemeProvider theme={persianTheme}>{children}</ThemeProvider>
}

export default MuiThemeProvider
