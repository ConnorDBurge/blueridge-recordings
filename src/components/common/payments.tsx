import { getStorefront } from '@/lib/shopify'
import Image from 'next/image'
import Link from 'next/link'

export async function PaymentMethods() {
  const storefront = await getStorefront()
  const { cardBrands, digitalWallets } = storefront?.paymentSettings

  return (
    <div className="flex flex-wrap gap-2">
      {[...cardBrands, ...digitalWallets].map((brand, index) => (
        <Link
          href="/pages/billing-terms-conditions"
          className="no-underline hover:scale-110 transition-300"
        >
          <Image
            priority
            key={index}
            src={`/payments/${brand}.svg`}
            alt={brand}
            width={36}
            height={22}
          />
        </Link>
      ))}
    </div>
  )
}