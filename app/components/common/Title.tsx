import type { SxProps } from '@mui/material'
import { Stack, Typography } from '@mui/material'
import type { FC } from 'react'

export type TitleProps = {
  title: string
  subTitle?: string
  sx?: SxProps
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
const Title: FC<TitleProps> = ({ title, subTitle, sx, variant = 'h3' }) => {
  return (
    <Stack spacing={2} sx={{ ...sx }}>
      <Typography variant={variant} fontWeight="700" color="grey.900">
        {title}
      </Typography>
      {subTitle && (
        <Typography variant="h4" fontWeight={400} color="grey.500">
          {subTitle}
        </Typography>
      )}
    </Stack>
  )
}

export default Title
