import { getAdmin, getMenu } from '@/lib/shopify'
import { Socials } from '@/components/common'
import Link from 'next/link'

export async function ContactMenu() {
  const secondaryMenu = await getMenu('secondary-menu')
  const { contactEmail, timezone, billingAddress, hours } = await getAdmin()
  const [abbreviated, long] = hours

  return (
    <div className="size-full py-6 flex flex-col gap-3 text-white px-[20px] mb-[60px]">
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
