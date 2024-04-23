'use client'

import { useEffect, useState } from 'react'
import { MenuItem } from '@/lib/shopify/types'
import { ChevronDownIcon } from '@/components/icons'
import MobileLink from './mobile-link'
import { usePathname } from 'next/navigation'

export function PrimaryMenu({ items }: { items: MenuItem[] }) {
  const [activeMenu, setActiveMenu] = useState<number>()
  const pathname = usePathname()

  useEffect(() => {
    setActiveMenu(undefined)
  }, [pathname])

  return (
    <div className="flex flex-col">
      {items?.map((item, index) => (
        <div key={index}>
          {!item?.items || item?.items?.length === 0 ? (
            <MobileLink
              href={item?.path}
              className="no-underline w-full h-full flex justify-between border-b-[1px] border-tertiary px-[20px] py-6 text-white"
              onClick={() => setActiveMenu(undefined)}
            >
              {item?.title}
            </MobileLink>
          ) : (
            <>
              <div
                className="flex justify-between border-b-[1px] border-tertiary px-[20px] py-6"
                onClick={() => setActiveMenu(index)}
              >
                <span className="text-white flex-1">{item?.title}</span>
                <ChevronDownIcon className="-rotate-90" />
              </div>
              <div
                className={`overflow-y-auto absolute left-0 top-0 z-50 w-screen h-screen transition-300 ${activeMenu === index ? 'translate-x-[0]' : 'translate-x-[-100%]'}`}
              >
                <div className="bg-primary text-white h-screen px-[20px]">
                  <div
                    className="flex justify-between border-b-[1px] border-tertiary py-6 gap-2"
                    onClick={() => setActiveMenu(undefined)}
                  >
                    <ChevronDownIcon className="fill-divider rotate-90" />
                    <span className="text-divider flex-1">Back</span>
                  </div>
                  <h2 className="text-white border-b-[1px] border-tertiary px-[20px] py-3 tracking-wider">
                    {item?.title}
                  </h2>
                  <PrimaryMenu items={item?.items} />
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}
