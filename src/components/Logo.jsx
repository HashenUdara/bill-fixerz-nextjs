import { useId } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import logo from '../images/logo.png'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (

    <Image
      src={logo}
      alt="Hi"
      className="h-10 w-10"
      unoptimized
    />

  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (

      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />

  )
}
