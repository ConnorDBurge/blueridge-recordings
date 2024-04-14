import { ShopAdmin } from '@/lib/shopify/types'
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  LinkedInIcon,
} from '@/components/icons'
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
        <div className="flex flex-col gap-2">
          <h4 className="mb-2">
            <a
              target="_blank"
              href={`https://www.google.com/search?q=${name}`}
              className="no-underline"
            >
              {name}
            </a>
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
          <a
            target="_blank"
            href={`https://www.google.com/search?q=${name}`}
            className="text-tertiary hover:text-primary"
          >
            {street} {suite}, {city}, {state} {zip}
          </a>
          <Link href="/" className="text-tertiary hover:text-primary">
            {long?.value} {timezone}
          </Link>
          <div className="flex gap-4 flex-wrap mt-4">
            {socials.map((social) => (
              <a
                key={social?.name}
                href={social?.url}
                target="_blank"
                className="no-underline hover:scale-125 transition-300"
              >
                {social?.icon}
              </a>
            ))}
          </div>
          <Image
            className="mt-3"
            src="https://cdn.shopify.com/s/files/1/0582/4738/1066/files/veteran-owned.svg"
            alt="veteran-owned"
            width={150}
            height={0}
          />
        </div>
      </div>
    </menu>
  )
}

/* These are set up in Shopify store brand settings, but Shopify does not expose these values via any API(s) */
const socials = [
  {
    name: 'Facebook',
    url: 'https://m.facebook.com/blueridgerecordings',
    icon: <FacebookIcon />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/blueridgerecordings',
    icon: <InstagramIcon />,
  },
  {
    name: 'Pinterest',
    url: 'https://www.pinterest.com/blueridgerecordings',
    icon: <PinterestIcon />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/blueridge-recordings',
    icon: <LinkedInIcon />,
  },
]
