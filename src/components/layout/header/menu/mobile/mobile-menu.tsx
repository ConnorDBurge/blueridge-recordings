import { getMenu } from '@/lib/shopify'
import { MenuItem } from '@/lib/shopify/types'
import { ChevronDownIcon } from '@/components/icons'
import { ContactMenu } from './contact-menu'
import MobileLink from './mobile-link'

export async function MobileMenu() {
  return (
    <div className="md:hidden translate-x-[-100%] peer-has-[input[role='mobile-toggle']:checked]:translate-x-[0] transition-300">
      <div className="bg-primary border-t-[1px] border-tertiary fixed left-0 w-screen h-screen z-50">
        <div className="flex flex-col gap-4 px-[20px] pb-[60px] overflow-y-auto">
          <PrimaryMenu />
          <ContactMenu />
        </div>
      </div>
    </div>
  )
}

async function PrimaryMenu() {
  const primaryMenu = await getMenu('primary-menu')
  const items = primaryMenu?.items as MenuItem[]

  return (
    <div className="flex flex-col">
      {items?.map((item, index) => (
        <>
          {item?.items?.length === 0 ? (
            <MobileLink
              href={item?.path}
              className="no-underline w-full h-full"
            >
              <label
                key={index}
                className="flex justify-between border-b-[1px] border-tertiary px-[20px] py-6 text-white"
              >
                <input
                  type="radio"
                  name="mobile-menu-primary"
                  value={item?.title}
                  className="hidden"
                />
                {item?.title}
              </label>
            </MobileLink>
          ) : (
            <>
              <label
                key={index}
                className="flex justify-between border-b-[1px] border-tertiary px-[20px] py-6"
              >
                <input
                  type="radio"
                  name="mobile-menu-primary"
                  value={item?.title}
                  className="hidden"
                />
                <span className="text-white flex-1">{item?.title}</span>
                <ChevronDownIcon className="-rotate-90" />
              </label>
            </>
          )}
        </>
      ))}
    </div>
  )
}
