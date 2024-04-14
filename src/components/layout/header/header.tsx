import { SearchIcon } from '@/components/icons'
import AnnouncementBar from './anncouncement-bar'
import { MainMenu } from './menu'
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
            <Link
              href="/"
              className="block w-[150px] pt-[2px] md:ml-0 md:w-[200px] md:p-0"
            >
              <Image
                priority
                src="/brand/blueridge.svg"
                alt="BlueRidge Recordings"
                width={200} // CSS overides this to 200px on medium screens
                height={50} // Ignored by CSS
              />
            </Link>
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
