import { getMenu } from '@/lib/shopify'
import HideOnScroll from './hide-scroll'
import MenuItem from './menu-item'

export async function MainMenu() {
  const primaryMenu = await getMenu('primary-menu')
  const secondaryMenu = await getMenu('secondary-menu')

  return (
    <HideOnScroll>
      <menu className="bg-primary">
        <nav className="group container hidden justify-between bg-transparent md:flex">
          <ul className="flex">
            {primaryMenu?.items?.map((item) => (
              <MenuItem key={item?.id} item={item} />
            ))}
          </ul>
          <ul className="flex">
            {secondaryMenu?.items?.map((item) => (
              <MenuItem key={item?.id} item={item} />
            ))}
          </ul>
        </nav>
      </menu>
    </HideOnScroll>
  )
}
