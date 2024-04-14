import { getAdmin } from '@/lib/shopify'
import { ShopAdmin } from '@/lib/shopify/types'
import Image from 'next/image'
import Link from 'next/link'

export default async function ContactInformation({
  admin,
}: {
  admin: ShopAdmin
}) {
  const [company, street, suite, city, state, zip] =
    admin?.billingAddress?.formatted
  const phone = admin?.billingAddress?.phone
  const {
    name,
    contactEmail,
    timezone,
    hours: [, long],
  } = admin

  return (
    <menu className="flex-grow flex-shrink basis-[350px] md:border-none border-t-[1px] border-[#BEBBC4] mt-6 md:mt-0">
      <div className="mt-6 md:mt-0">
        <h4>{company}</h4>
        <h4>
          <a
            target="_blank"
            href={`https://www.google.com/search?q=${name}`}
            className="no-underline"
          >
            {name}
          </a>
        </h4>
        <ul className="mt-4">
          <li>
            <Link
              href={`tel:${phone}`}
              className="text-tertiary hover:text-primary"
            >
              +1 {phone}
            </Link>
          </li>
          <li>
            <Link
              href={`mailto:${contactEmail}`}
              className="text-tertiary hover:text-primary"
            >
              {contactEmail}
            </Link>
          </li>
          <li>
            <a
              target="_blank"
              href={`https://www.google.com/search?q=${name}`}
              className="text-tertiary hover:text-primary"
            >
              {street} {suite}, {city}, {state} {zip}
            </a>
          </li>
          <li>
            <Link href="/" className="text-tertiary hover:text-primary">
              {long?.value} {timezone}
            </Link>
          </li>
          <li>
            <Image
              className="mt-4"
              src="https://cdn.shopify.com/s/files/1/0582/4738/1066/files/veteran-owned.svg"
              alt="veteran-owned"
              width={150}
              height={0}
            />
          </li>
        </ul>
      </div>
    </menu>
  )
}
