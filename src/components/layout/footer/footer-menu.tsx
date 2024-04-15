import { Menu } from '@/lib/shopify/types'
import { Accordion } from '@/components/common'
import Link from 'next/link'

export default async function FooterMenu({ menu }: { menu: Menu | undefined }) {
  return (
    menu && (
      <menu className="lg:flex-grow-0 lg:basis-auto lg:min-w-[130px] lg:max-w-1/4 mb-6 md:mb-0">
        <Accordion
          disabledOnDesktop
          header={<h4>{menu?.title}</h4>}
          className="mt-6 md:mt-0"
        >
          <ul className="flex flex-col gap-1 mt-5">
            {menu.items.map((item, index) => (
              <li key={`sub-menu-${index}`} className="m-0">
                <Link
                  href={item?.path}
                  className="text-tertiary hover:text-primary"
                >
                  {item?.title}
                </Link>
              </li>
            ))}
          </ul>
        </Accordion>
      </menu>
    )
  )
}
