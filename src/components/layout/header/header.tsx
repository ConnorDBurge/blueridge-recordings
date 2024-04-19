import { SearchIcon } from '@/components/icons'
import AnnouncementBar from './anncouncement-bar'
import { HeaderLogo } from './header-logo'
import { MainMenu } from './menu'
import { MobileMenu } from './menu/mobile'
import styles from './menu/mobile/mobile-menu.module.css'
import { Search } from './search'
import { ShoppingCartButton } from './shopping-cart'
import Image from 'next/image'
import Link from 'next/link'

export async function Header() {
  return (
    <>
      <AnnouncementBar />
      <header className="flex flex-col md:pb-0">
        <div className="z-20 bg-primary">
          <div className="container flex items-center gap-8 py-2 md:py-3 lg:gap-16">
            <MobileMenu />
            <HeaderLogo />
            <Search />
            <div className="flex items-center justify-end gap-4">
              <SearchIcon className="h-8 w-8 hover:cursor-pointer hover:fill-secondary md:hidden" />
              <ShoppingCartButton />
            </div>
          </div>
        </div>
        <MainMenu />
      </header>
    </>
  )
}
