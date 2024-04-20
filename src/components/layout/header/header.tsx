import { getMenu } from '@/lib/shopify'
import { MenuItem } from '@/lib/shopify/types'
import { SearchIcon } from '@/components/icons'
import AnnouncementBar from './anncouncement-bar'
import { HeaderLogo } from './header-logo'
import { MainMenu } from './menu'
import { MobileMenu } from './menu/mobile'
import styles from './menu/mobile/mobile-menu.module.css'
import { Search } from './search'
import { ShoppingCartButton } from './shopping-cart'

export async function Header() {
  const primaryMenu = await getMenu('primary-menu')
  const items = primaryMenu?.items as MenuItem[]

  return (
    <>
      <AnnouncementBar />
      <header className="flex flex-col md:pb-0 peer">
        <div className="z-20 bg-primary">
          <div className="container flex items-center gap-8 py-2 md:py-3 lg:gap-16">
            <label id="hamburger" className={`${styles.hamburger}`}>
              <input type="checkbox" role="mobile-toggle" />
            </label>
            <HeaderLogo />
            <Search />
            <div className="flex items-center justify-end gap-4">
              <SearchIcon className="h-8 w-8 hover:cursor-pointer hover:fill-secondary md:hidden" />
              <ShoppingCartButton />
            </div>
          </div>
        </div>
        <MainMenu />
        <MobileMenu items={items} />
      </header>
      <div
        // Frosty overlay
        className="fixed inset-0 bg-primary/20 opacity-0 z-20 peer-has-[li[role='menu-dropdown']:hover]:opacity-100 peer-has-[li[role='menu-dropdown']:hover]:backdrop-blur-[1.5px] transition-300"
        aria-hidden="true"
      />
    </>
  )
}
