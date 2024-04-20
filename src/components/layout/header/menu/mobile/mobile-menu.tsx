'use client'

import { MenuItem } from '@/lib/shopify/types'
import { ChevronDownIcon } from '@/components/icons'
import { ContactMenu } from './contact-menu'
import MobileLink from './mobile-link'
import styles from './mobile-menu.module.css'

export function MobileMenu({ items }: { items: MenuItem[] }) {
  return (
    <div className="md:hidden">
      {/* <div
        className={`bg-primary md:hidden border-t-[1px] border-tertiary ${styles.mobile_menu}`}
      >
        <div className="flex flex-col gap-4 px-[20px] pb-[60px] overflow-y-auto">
          <PrimaryMenu items={items} />
          <ContactMenu />
        </div>
      </div> */}
    </div>
  )
}

function PrimaryMenu({ items }: { items: MenuItem[] }) {
  return (
    <div className="flex flex-col">
      {items?.map((item, index) => (
        <label
          key={index}
          className="flex justify-between py-6 border-b-[1px] border-tertiary px-[20px]"
        >
          <input
            type="radio"
            name="mobile-menu-primary"
            value={item?.title}
            className="hidden"
          />
          {item?.items?.length === 0 ? (
            <MobileLink
              href={item?.path}
              className="text-white no-underline w-full"
            >
              {item?.title}
            </MobileLink>
          ) : (
            <>
              <span className="text-white flex-1">{item?.title}</span>
              <ChevronDownIcon className="-rotate-90" />
            </>
          )}
        </label>
      ))}
    </div>
  )
}
