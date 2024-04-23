'use client'

import React from 'react'
import Link from 'next/link'

export default function MobileLink({
  href,
  children,
  className,
  onClick,
}: {
  href: string
  children: any
  className?: string
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        const checkbox: HTMLInputElement | null = document.getElementById(
          'mobile-toggle',
        ) as HTMLInputElement
        if (checkbox) {
          checkbox.checked = false
        }
        onClick && onClick()
      }}
    >
      {children}
    </Link>
  )
}
