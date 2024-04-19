import { getAdmin, getMenu } from '@/lib/shopify'
import { Socials } from '@/components/common'
import { ChevronDownIcon } from '@/components/icons'
import MobileLink from './mobile-link'
import styles from './mobile-menu.module.css'
import Link from 'next/link'

export async function MobileMenu() {
  const primaryMenu = await getMenu('primary-menu')

  return (
    <div className="md:hidden">
      <label id="hamburger" className={`${styles.hamburger}`}>
        <input type="checkbox" id="mobile-toggle" />
      </label>
      <div
        className={`bg-primary md:hidden border-t-[1px] border-tertiary ${styles.mobile_menu}`}
      >
        <div className="flex flex-col gap-4 px-[20px] pb-[60px]">
          <PrimaryMenu />
          <SecondaryMenu />
        </div>
      </div>
    </div>
  )
}

async function PrimaryMenu() {
  const primaryMenu = await getMenu('primary-menu')

  return (
    <div className="flex flex-col">
      {primaryMenu?.items?.map((item, index) => (
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
          {item?.depth === 0 ? (
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

async function SecondaryMenu() {
  const secondaryMenu = await getMenu('secondary-menu')
  const { contactEmail, timezone, billingAddress, hours } = await getAdmin()
  const [abbreviated, long] = hours

  return (
    <div className="size-full py-4 flex flex-col gap-3 text-white px-[20px]">
      {secondaryMenu?.items?.map((item, index) => (
        <Link key={index} href={item?.path} className="no-underline">
          {item?.title}
        </Link>
      ))}
      <Link href={`tel:${billingAddress?.phone}`} className="no-underline">
        +1 {billingAddress?.phone}
      </Link>
      <Link href={`mailto:${contactEmail}`} className="no-underline">
        {contactEmail}
      </Link>
      <Link className="no-underline" href="/">
        {abbreviated?.value || long?.value} {timezone}
      </Link>
      <Socials className="mt-2 fill-divider" />
    </div>
  )
}
