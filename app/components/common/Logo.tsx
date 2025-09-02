import type { FC } from 'react'
import React from 'react'
import type { ImageProps } from 'next/image'
import Image from 'next/image'

const Logo: FC<Partial<ImageProps>> = (props) => {
  return (
    <Image
      draggable={false}
      width={177}
      height={40}
      alt=""
      src={props?.src ?? '/assets/images/logo.png'}
      {...props}
    />
  )
}

export default Logo
