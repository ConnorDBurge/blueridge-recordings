'use client'

import { useEffect, useState } from 'react'
import { Menu } from '@/lib/shopify/types'
import { Accordion } from '@/components/common'
import Link from 'next/link'

export default function FooterMenus({
  menu,
  admin,
}: {
  menu: Menu
  admin: any
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

  const [isDektop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="from-lavender bg-gradient-to-b">
      <div className="container md:flex md:flex-wrap md:mb-6 py-8 gap-12">
        <menu className="flex-grow-0 flex-shrink basis-[350px] mb-6 md:mb-0">
          <Accordion disabled={isDektop} header={<h4>Newsletter</h4>}>
            <p className="font-light mt-5 text-tertiary">
              Sign up for exclusive offers, original stories, events and more.
            </p>
          </Accordion>
        </menu>
        {menu?.items.map((menu, index) => (
          <menu
            key={`footer-menu-${index}`}
            className="lg:flex-grow-0 lg:basis-auto lg:min-w-[130px] lg:max-w-1/4 md:border-none border-t-[1px] border-[#BEBBC4] mb-6 md:mb-0"
          >
            <Accordion
              disabled={isDektop}
              header={<h4>{menu.title}</h4>}
              className="mt-6 md:mt-0"
            >
              <ul className="flex flex-col gap-1 mt-5">
                {menu.items.map((item, index) => (
                  <li key={`sub-menu-${index}`} className="m-0">
                    <Link
                      href={item?.path}
                      className="no-underline text-tertiary hover:text-primary hover:font-medium"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Accordion>
          </menu>
        ))}
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
                  className="no-underline text-tertiary hover:text-primary hover:font-medium"
                >
                  +1 {phone}
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${contactEmail}`}
                  className="no-underline text-tertiary hover:text-primary hover:font-medium"
                >
                  {contactEmail}
                </Link>
              </li>
              <li>
                <a
                  target="_blank"
                  href={`https://www.google.com/search?q=${name}`}
                  className="no-underline text-tertiary hover:text-primary hover:font-medium"
                >
                  {street} {suite}, {city}, {state} {zip}
                </a>
              </li>
              <li>
                <Link
                  href="/"
                  className="no-underline text-tertiary hover:text-primary hover:font-medium"
                >
                  {long?.value} {timezone}
                </Link>
              </li>
            </ul>
          </div>
        </menu>
      </div>
    </div>
  )
}
