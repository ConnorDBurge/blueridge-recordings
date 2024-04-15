import { getAdmin } from '@/lib/shopify'
import { Socials } from '@/components/common'
import Image from 'next/image'
import Link from 'next/link'

export default async function ContactInformation() {
  const admin = await getAdmin()

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
    <menu className="flex-grow flex-shrink basis-[350px] mt-6 md:mt-0">
      <div className="mt-6 md:mt-0">
        <h4>{company}</h4>
        <div className="flex flex-col gap-2">
          <h4 className="mb-2">
            <Link
              target="_blank"
              href={`https://www.google.com/search?q=${name}`}
              className="no-underline"
            >
              {name}
            </Link>
          </h4>
          <Link
            href={`tel:${phone}`}
            className="text-tertiary hover:text-primary"
          >
            +1 {phone}
          </Link>
          <Link
            href={`mailto:${contactEmail}`}
            className="text-tertiary hover:text-primary"
          >
            {contactEmail}
          </Link>
          <Link
            target="_blank"
            href={`https://www.google.com/search?q=${name}`}
            className="text-tertiary hover:text-primary"
          >
            {street} {suite}, {city}, {state} {zip}
          </Link>
          <Link href="/" className="text-tertiary hover:text-primary">
            {long?.value} {timezone}
          </Link>
          <div className="mt-3 w-[150px]">
            <Image
              priority
              className="w-full h-auto"
              src="/brand/veteran-owned.svg"
              alt="veteran-owned"
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
    </menu>
  )
}
