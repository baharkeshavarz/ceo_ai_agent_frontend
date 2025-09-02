import { CssBaseline, GlobalStyles } from '@mui/material'
import { getLocaleOnServer } from '@/i18n/server'
import { getTailwindDirection } from '@/utils/rtl'

import './styles/globals.css'
import './styles/markdown.scss'
import TanstackProvider from '@/providers/TanstackProvider'
import ToastProvider from '@/providers/ToastProvider'
import { globalStyles } from '@/config/theme'
import MuiThemeProvider from '@/providers/MuiThemeProvider'

const LocaleLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const locale = getLocaleOnServer()
  // const dir = getHtmlDir(locale ?? 'ar')
  const directionClass = getTailwindDirection(locale ?? 'ar')

  return (<html lang='ar' dir='rtl' className={`h-full ${directionClass}`}>
    <body className="h-full">
      <div className="overflow-x-hidden">
        <div className="w-screen h-screen min-w-[300px]">
          <TanstackProvider>
            <MuiThemeProvider>
              <CssBaseline />
              <GlobalStyles styles={globalStyles} />
              <ToastProvider />
              {children}
            </MuiThemeProvider>
          </TanstackProvider>
        </div>
      </div>
    </body>
  </html>
  )
}

export default LocaleLayout
