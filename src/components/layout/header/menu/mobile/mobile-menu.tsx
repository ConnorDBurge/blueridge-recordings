import { getAdmin, getMenu } from '@/lib/shopify'
import { Socials } from '@/components/common'
import styles from './mobile-menu.module.css'
import Link from 'next/link'

export async function MobileMenu() {
  const primaryMenu = await getMenu('primary-menu')
  const secondaryMenu = await getMenu('secondary-menu')
  const { contactEmail, timezone, billingAddress, hours } = await getAdmin()
  const [abbreviated, long] = hours

  return (
    <div className="md:hidden">
      <label id="hamburger" className={`${styles.hamburger}`}>
        <input type="checkbox" />
      </label>
      <div
        className={`bg-primary md:hidden border-t-[1px] border-tertiary ${styles.mobile_menu}`}
      >
        <div className="px-[40px] pb-[60px]">
          <div className="size-full py-4 flex flex-col gap-3 text-white">
            {secondaryMenu?.items?.map((item, index) => (
              <Link key={index} href={item?.path} className="no-underline">
                {item?.title}
              </Link>
            ))}
            <Link
              href={`tel:${billingAddress?.phone}`}
              className="no-underline"
            >
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
        </div>
      </div>
    </div>
  )
}
