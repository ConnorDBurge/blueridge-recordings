import { Suspense } from 'react'
import { getAdmin, getMenu, getStorefront } from '@/lib/shopify'
import Banner from './banner'
import FooterMenus from './footer-menus'
import FooterMetaData from './footer-meta'

export async function Footer() {
  const footerMenus = await getMenu('footer-primary')
  const admin = await getAdmin()

  return (
    <section>
      <Suspense>
        <Banner />
        <footer className="from-lavender to-white bg-gradient-to-b flex flex-col gap-5">
          <FooterMenus menu={footerMenus} admin={admin} />
          <FooterMetaData />
        </footer>
      </Suspense>
    </section>
  )
}
