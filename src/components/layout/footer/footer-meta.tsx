import { getMenu, getStorefront } from '@/lib/shopify'
import { PaymentMethods } from '@/components/common'
import Link from 'next/link'

export default async function FooterMetaData() {
  const storefront = await getStorefront()
  const { items: policies } = await getMenu('footer')

  return (
    <div className="container pb-5">
      <div className="flex flex-col">
        <PaymentMethods />
        <div className="border-t-[1px] border-[#D0CFD4] w-full h-[1px] mt-5" />
        <div className="flex md:items-center items-start justify-between md:flex-row mt-5 flex-col-reverse">
          <Link
            href="/"
            className="no-underline mt-4 md:mb-4 md:mt-0 text-tertiary text-xs"
          >
            © {new Date().getFullYear()} {storefront?.name}.{' '}
            <br className="md:hidden" />
            {storefront?.brand?.slogan}.
          </Link>
          <div className="flex flex-wrap justify-start gap-x-5 gap-y-3 md:max-w-[50%] md:justify-end">
            {policies.map((policy, index) => (
              <Link
                key={`policy-${index}`}
                href={policy.path}
                className="text-tertiary text-xs no-underline"
              >
                {policy.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}