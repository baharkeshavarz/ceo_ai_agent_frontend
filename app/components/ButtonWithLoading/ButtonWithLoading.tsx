import type { ButtonProps } from '@mui/material'
import type { FC } from 'react'
import { Button, CircularProgress, Typography } from '@mui/material'

export type ButtonWithLoadingProps = {
  isLoading?: boolean
  needStyling?: boolean
} & ButtonProps

const ButtonWithLoading: FC<ButtonWithLoadingProps> = ({
  isLoading,
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      disabled={isLoading || props.disabled}
      sx={{
        ...props.sx,
      }}
    >
      {isLoading
        ? (
          <>
            <CircularProgress color="inherit" size={20} />
            <Typography variant="subtitle2">در حال پردازش...</Typography>
          </>
        )
        : (
          children
        )}
    </Button>
  )
}

export default ButtonWithLoading
