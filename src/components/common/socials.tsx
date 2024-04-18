import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  PinterestIcon,
} from '@/components/icons'
import Link from 'next/link'

export function Socials({ ...rest }) {
  return (
    <div className={`flex gap-x-5 flex-wrap`}>
      {socials.map((social) => (
        <Link
          key={social.name}
          href={social.url}
          target="_blank"
          className="no-underline hover:scale-125 transition-300"
        >
          {social.icon(rest)}
        </Link>
      ))}
    </div>
  )
}

/* These are set up in Shopify store brand settings, but Shopify does not expose these values via any API(s) */
const socials = [
  {
    name: 'Facebook',
    url: 'https://m.facebook.com/blueridgerecordings',
    icon: (rest: { [x: string]: any }) => <FacebookIcon {...rest} />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/blueridgerecordings',
    icon: (rest: { [x: string]: any }) => <InstagramIcon {...rest} />,
  },
  {
    name: 'Pinterest',
    url: 'https://www.pinterest.com/blueridgerecordings',
    icon: (rest: { [x: string]: any }) => <PinterestIcon {...rest} />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/blueridge-recordings',
    icon: (rest: { [x: string]: any }) => <LinkedInIcon {...rest} />,
  },
]
