import { ReactElement } from 'react'
import { getBanner } from '@/lib/shopify'
import { Swiper } from '@/components/common'
import { BoxIcon, PhoneIcon, ReturnIcon, TruckIcon } from '@/components/icons'
import Link from 'next/link'

export default async function Banner() {
  const bannerItems = await getBanner()
  return (
    <div className="bg-primary py-0">
      <div className="container relative">
        <Swiper>
          {bannerItems.map((item, index) => (
            <Link
              key={index}
              href={item?.path}
              className="group/cta transition-300 mx-7 flex h-full flex-grow items-center justify-center gap-5 py-3 no-underline group-hover/cta:stroke-secondary md:px-0 md:py-5 xl:mx-0"
            >
              {icons[item?.icon?.toLowerCase()]}
              <div className="flex flex-col">
                <span className="transition-300 font-semibold text-white group-hover/cta:text-secondary">
                  {item?.title}
                </span>
                <span className="transition-300 text-sm text-gray-200 group-hover/cta:text-secondary">
                  {item?.sub_title}
                </span>
              </div>
            </Link>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

const icons: {
  [key: string]: ReactElement
} = {
  truck: (
    <TruckIcon className="transition-300 flex-shrink-0 group-hover/cta:fill-secondary" />
  ),
  phone: (
    <PhoneIcon className="transition-300 flex-shrink-0 group-hover/cta:stroke-secondary" />
  ),
  return: (
    <ReturnIcon className="transition-300 flex-shrink-0 group-hover/cta:fill-secondary" />
  ),
  box: (
    <BoxIcon className="transition-300 flex-shrink-0 group-hover/cta:fill-secondary" />
  ),
}
