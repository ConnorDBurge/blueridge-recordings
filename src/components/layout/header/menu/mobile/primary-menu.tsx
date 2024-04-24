'use client'

import { useEffect, useState } from 'react'
import { MenuItem } from '@/lib/shopify/types'
import { ChevronDownIcon } from '@/components/icons'
import MobileLink from './mobile-link'
import { usePathname } from 'next/navigation'

export function PrimaryMenu({
  items,
  className,
}: {
  items: MenuItem[]
  className?: string
}) {
  const [activeMenu, setActiveMenu] = useState<number>()
  const pathname = usePathname()

  useEffect(() => {
    setActiveMenu(undefined)
  }, [pathname])

  return (
    <div
      className={`flex flex-col divide-y-[1px] divide-tertiary ${className}`}
    >
      {items.map((item, index) => (
        <div key={index}>
          {!item.items?.length ? (
            <MobileLink
              href={item.path}
              className="no-underline w-full h-full flex justify-between px-[20px] py-6 text-white"
              onClick={() => setActiveMenu(undefined)}
            >
              {item.title}
            </MobileLink>
          ) : (
            <>
              <div
                className="flex justify-between px-[20px] py-6"
                onClick={() => setActiveMenu(index)}
              >
                <span className="text-white flex-1">{item.title}</span>
                <ChevronDownIcon className="-rotate-90" />
              </div>
              <div
                className={`bg-primary absolute top-0 left-0 w-screen h-full z-50 overflow-y-auto transition-300 ${activeMenu === index ? 'translate-x-[0]' : 'translate-x-[-100%]'}`}
              >
                <div className="px-[20px] flex flex-col divide-y-[1px] divide-tertiary">
                  <div
                    className="flex justify-between px-[20px] py-3 gap-2 -ml-2"
                    onClick={() => setActiveMenu(undefined)}
                  >
                    <ChevronDownIcon className="fill-divider rotate-90" />
                    <span className="text-divider flex-1">Back</span>
                  </div>
                  <h2 className="text-white py-3 tracking-wider px-[20px]">
                    {item.title}
                  </h2>
                  <PrimaryMenu items={item.items} className="mb-[100px]" />
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}
