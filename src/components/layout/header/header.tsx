import { FrostyOverlay } from '@/components/common'
import { SearchIcon } from '@/components/icons'
import AnnouncementBar from './anncouncement-bar'
import { HeaderLogo } from './header-logo'
import { MainMenu } from './menu'
import { MobileMenu, MobileMenuToggle } from './menu/mobile'
import { Search } from './search'
import { ShoppingCartButton } from './shopping-cart'

export async function Header() {
  return (
    <>
      <AnnouncementBar />
      <header className="flex flex-col md:pb-0 peer">
        <div className="z-20 bg-primary peer">
          <div className="container flex items-center gap-8 py-2 md:py-3 lg:gap-16">
            <MobileMenuToggle />
            <HeaderLogo />
            <Search />
            <div className="flex items-center justify-end gap-4">
              <SearchIcon className="h-8 w-8 hover:cursor-pointer hover:fill-secondary md:hidden" />
              <ShoppingCartButton />
            </div>
          </div>
        </div>
        <MainMenu />
        <MobileMenu />
      </header>
      <FrostyOverlay />
    </>
  )
}
