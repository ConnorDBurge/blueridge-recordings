'use client'

import type { MenuItem } from '@/lib/shopify/types'
import { ChevronDownIcon } from '@/components/icons'
import FlyoutMenu from './flyout-menu'
import MegaMenu from './mega-menu'
import styles from './menu-item.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MenuItem({ item }: { item: MenuItem }) {
  const pathname = usePathname()
  const isActive = pathname === item?.path
  const isMegaMenu = item?.path === '/collections/all'

  return (
    <li
      role={item?.depth > 0 ? 'menu-dropdown' : undefined}
      className={`
        ${isActive && styles.menu_active}
        ${styles.menu_underline}
        ${item?.depth < 1 && 'mr-[7px]'} 
        group/menu-li m-0 py-px`}
    >
      <Link
        href={item?.path}
        className={`transition-300 my-0 flex items-center gap-1 font-medium text-white no-underline px-[6px]
        ${!isActive && 'group-hover/menu-li:text-secondary'}`}
      >
        {item?.title}
        {item?.depth > 0 && (
          <ChevronDownIcon
            className={`transition-300 group-hover/menu-li:rotate-180
            ${!isActive && 'group-hover/menu-li:fill-secondary'}`}
          />
        )}
      </Link>
      {item?.depth > 0 && (
        <>
          {isMegaMenu ? (
            <div className="transition-300 absolute left-0 mt-[3px] max-h-0 w-screen overflow-hidden group-hover/menu-li:max-h-[75vh]">
              <MegaMenu menu={item} />
            </div>
          ) : (
            <div className="transition-300 absolute mt-[3px] max-h-0 overflow-hidden rounded-b-lg group-hover/menu-li:max-h-[75vh]">
              <FlyoutMenu menu={item} />
            </div>
          )}
        </>
      )}
    </li>
  )
}
