import FooterMenus from './footer-menus'
import FooterMetaData from './footer-meta'
import FooterBanner from './footrer-banner'

export async function Footer() {
  return (
    <section>
      <FooterBanner />
      <footer className="from-lavender to-white bg-gradient-to-b flex flex-col gap-5">
        <FooterMenus />
        <FooterMetaData />
      </footer>
    </section>
  )
}
