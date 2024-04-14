import { Suspense } from 'react'
import { getAdmin, getMenu } from '@/lib/shopify'
import Banner from './banner'
import FooterMenus from './footer-menus'

export async function Footer() {
  const footerMenus = await getMenu('footer-primary')
  const admin = await getAdmin()

  return (
    <>
      <Suspense>
        <Banner />
        <FooterMenus menu={footerMenus} admin={admin} />
      </Suspense>
    </>
  )
}
