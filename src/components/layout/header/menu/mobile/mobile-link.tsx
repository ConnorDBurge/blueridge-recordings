'use client'

import React from 'react'
import Link from 'next/link'

export default function MobileLink({
  href,
  children,
  className,
  ...rest
}: {
  href: string
  children: any
  className?: string
}) {
  return (
    <Link
      href={href}
      className={className}
      {...rest}
      onClick={() => {
        const checkbox: HTMLInputElement | null = document.getElementById(
          'mobile-toggle',
        ) as HTMLInputElement
        if (checkbox) {
          checkbox.checked = false
        }
      }}
    >
      {children}
    </Link>
  )
}
