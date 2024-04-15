import { Suspense } from 'react'
import { getStorefront } from '@/lib/shopify'
import { baseUrl } from '@/lib/utils'
import { Footer, Header } from '@/components/layout'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'

export async function generateMetadata() {
  const shop = await getStorefront()
  const metadata = {
    metadataBaseUrl: new URL(baseUrl),
    title: shop?.name,
    description: shop?.description,
  }

  return metadata
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const shop = await getStorefront()
  const favicon = shop?.brand?.squareLogo?.image?.url
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href={favicon} />
      </head>
      <body>
        <Header />
        <Suspense>{children}</Suspense>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
