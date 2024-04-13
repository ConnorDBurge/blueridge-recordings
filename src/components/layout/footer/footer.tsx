import { getAdmin, getMenu } from '@/lib/shopify'
import Banner from './banner'
import FooterMenus from './footer-menus'

export async function Footer() {
  const footerMenus = await getMenu('footer-primary')
  const admin = await getAdmin()
  return (
    <>
      <Banner />
      <FooterMenus menu={footerMenus} admin={admin} />
    </>
  )
}
