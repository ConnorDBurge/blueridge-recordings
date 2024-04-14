import { Suspense } from 'react'
import { getAdmin, getMenu } from '@/lib/shopify'
import Banner from './banner'
import FooterMenus from './footer-menus'
import Image from 'next/image'

export async function Footer() {
  const footerMenus = await getMenu('footer-primary')
  const admin = await getAdmin()

  return (
    <section>
      <Suspense>
        <Banner />
        <FooterMenus menu={footerMenus} admin={admin} />
      </Suspense>
    </section>
  )
}
