'use client'
import { Box } from '@mui/material'
import type { FC } from 'react'
import { ToastContainer } from 'react-toastify'
import { getLocaleOnClient } from '@/i18n/client'
import 'react-toastify/dist/ReactToastify.css'
import { isRtl } from '@/utils/rtl'

export type ToastProviderProps = {}
const ToastProvider: FC<ToastProviderProps> = () => {
  const locale = getLocaleOnClient()
  return (
    <Box
      sx={{
        '& .Toastify__toast': {
          '--toastify-font-family': theme =>
            `${theme.typography.fontFamily} !important`,
        },
      }}
    >
      <ToastContainer
        rtl={isRtl(locale)}
        position="top-center"
      />
    </Box>
  )
}

export default ToastProvider
