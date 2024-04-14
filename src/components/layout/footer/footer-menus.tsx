'use client'

import { useEffect, useState } from 'react'
import { Menu } from '@/lib/shopify/types'
import ContactInformation from './contact'
import FooterMenu from './footer-menu'
import NewsLetterSignUp from './newsletter'

export default function FooterMenus({
  menu,
  admin,
}: {
  menu: Menu
  admin: any
}) {
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="from-lavender to-white bg-gradient-to-b">
      <div className="container md:flex md:flex-wrap md:mb-6 py-8 gap-12">
        <NewsLetterSignUp isDesktop={isDesktop} />
        {menu?.items.map((menu, index) => (
          <FooterMenu key={index} menu={menu} isDesktop={isDesktop} />
        ))}
        <ContactInformation admin={admin} />
      </div>
    </div>
  )
}
