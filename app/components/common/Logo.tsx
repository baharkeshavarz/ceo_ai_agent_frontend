import type { FC } from 'react'
import React from 'react'
import type { ImageProps } from 'next/image'
import Image from 'next/image'
import { DEFAULT_LOGO_PATH } from '@/constants/routes'

const Logo: FC<Partial<ImageProps>> = (props) => {
  return (
    <Image
      draggable={false}
      width={177}
      height={40}
      alt=""
      src={props?.src ?? DEFAULT_LOGO_PATH}
      {...props}
    />
  )
}

export default Logo
