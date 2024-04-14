import { MenuItem } from '@/lib/shopify/types'
import { Accordion } from '@/components/common'
import Link from 'next/link'

export default function FooterMenu({
  menu,
  isDesktop,
}: {
  menu: MenuItem
  isDesktop: boolean
}) {
  return (
    <menu className="lg:flex-grow-0 lg:basis-auto lg:min-w-[150px] lg:max-w-1/4 md:border-none border-t-[1px] border-[#BEBBC4] mb-6 md:mb-0">
      <Accordion
        disabled={isDesktop}
        header={<h4>{menu.title}</h4>}
        className="mt-6 md:mt-0"
      >
        <ul className="flex flex-col gap-1 mt-5">
          {menu.items.map((item, index) => (
            <li key={`sub-menu-${index}`} className="m-0">
              <Link
                href={item?.path}
                className="text-tertiary hover:text-primary"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </Accordion>
    </menu>
  )
}
