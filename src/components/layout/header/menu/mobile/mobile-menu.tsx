import { getMenu } from '@/lib/shopify'
import { MenuItem } from '@/lib/shopify/types'
import { ContactMenu } from './contact-menu'
import { PrimaryMenu } from './primary-menu'

export async function MobileMenu() {
  const primaryMenu = await getMenu('primary-menu')
  const items = primaryMenu?.items as MenuItem[]

  return (
    <div className="group-has-[input[role='mobile-toggle']:checked]/header:translate-x-[0] translate-x-[-100%] md:hidden transition-300">
      <div className="bg-primary fixed left-0 w-screen h-screen z-50 overflow-y-auto">
        <div className="flex flex-col divide-y-[1px] divide-tertiary px-[20px]">
          <PrimaryMenu items={items} />
          <ContactMenu />
        </div>
      </div>
    </div>
  )
}
