import { getMenu } from '@/lib/shopify'
import { MenuItem } from '@/lib/shopify/types'
import { ContactMenu } from './contact-menu'
import { PrimaryMenu } from './primary-menu'

export async function MobileMenu() {
  const primaryMenu = await getMenu('primary-menu')
  const items = primaryMenu?.items as MenuItem[]

  return (
    <div className="group-has-[input[role='mobile-toggle']:checked]/header:translate-x-[0] translate-x-[-100%] md:hidden transition-300">
      <div className="bg-primary border-t-[1px] border-tertiary fixed left-0 w-screen h-screen z-50">
        <div className="flex flex-col gap-4 px-[20px] pb-[60px] overflow-y-auto">
          <PrimaryMenu items={items} />
          <ContactMenu />
        </div>
      </div>
    </div>
  )
}
