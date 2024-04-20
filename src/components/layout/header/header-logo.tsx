'use client'

import Image from 'next/image'
import Link from 'next/link'

export function HeaderLogo() {
  return (
    <Link
      href="/"
      className="block w-[150px] pt-[2px] md:ml-0 md:w-[200px] md:p-0"
      onClick={() => {
        const checkbox: HTMLInputElement | null = document.getElementById(
          'mobile-toggle',
        ) as HTMLInputElement
        if (checkbox) {
          checkbox.checked = false
        }
      }}
    >
      <Image
        priority
        src="/brand/blueridge.svg"
        alt="BlueRidge Recordings"
        width={200}
        height={50}
      />
    </Link>
  )
}
