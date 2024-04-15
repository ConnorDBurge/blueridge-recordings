import { getMenu } from '@/lib/shopify'
import ContactInformation from './contact'
import FooterMenu from './footer-menu'
import NewsLetterSignUp from './newsletter'

export default async function FooterMenus() {
  const footerMenu = await getMenu('footer-primary')
  const mainMenu = footerMenu.items.find((item) => item.title === 'Main Menu')
  const customerCareMenu = footerMenu.items.find(
    (item) => item.title === 'Customer Care',
  )

  return (
    <div className="container md:flex md:flex-wrap pt-8 gap-12 md:divide-none divide-y divide-divider">
      <NewsLetterSignUp />
      <FooterMenu menu={mainMenu} />
      <FooterMenu menu={customerCareMenu} />
      <ContactInformation />
    </div>
  )
}
