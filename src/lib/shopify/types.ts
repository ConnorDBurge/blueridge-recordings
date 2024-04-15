export interface Pair {
  key: string
  value: string
}

export type ExtractVariables<T> = T extends { variables: object }
  ? T['variables']
  : never

export type HTTPRequest<T> = {
  cache?: RequestCache
  headers?: Record<string, string>
  query?: string
  tags?: string[]
  variables?: ExtractVariables<T>
}

export type MenuItem = {
  id: string
  resourceId: string
  tags: string[]
  title: string
  type: string
  url: string
  items: MenuItem[]
  depth: number
  path: string
}

export type Menu = {
  id: string
  handle?: string
  title?: string
  items: MenuItem[]
}

export type ShopifyMenuOperation = {
  data: {
    menu?: {
      items: {
        title: string
        url: string
      }[]
    }
  }
  variables: {
    handle: string
  }
}

export type Shop = {
  id: string
  name: string
  description: string | undefined
  primaryDomain: {
    url: string
  }
  brand: {
    slogan: string | undefined
    logo: ImageWrapper | undefined
    squareLogo: ImageWrapper | undefined
  }
  paymentSettings: {
    cardBrands: string[]
    digitalWallets: string[]
  }
}

export type ImageWrapper = {
  image: {
    url: string
  }
}

export type ShopAdmin = {
  name: string
  contactEmail: string
  timezone: string
  hours: Pair[]
  billingAddress: {
    formatted: string[]
    phone: string
  }
}

export type Locale = {
  locale: string
  name: string
}

export type Locales = Locale[]

export type Connection<T> = {
  edges: Array<Edge<T>>
}

export type Edge<T> = {
  node: T
}

export type BannerObject = {
  id: string
  title: string
  sub_title: string
  path: string
  icon: string
}

export type Footer = {
  banner: BannerObject[]
  admin: ShopAdmin
}

// {
//   banner: [
//     {
//       id: 'gid://shopify/Metaobject/74211295306',
//       title: 'Free Shipping',
//       sub_title: 'Enjoy free shipping on all orders in the United States',
//       path: '/policies/shipping-policy',
//       icon: 'Truck'
//     },
//     {
//       id: 'gid://shopify/Metaobject/74211328074',
//       title: 'Ready to Ship',
//       sub_title: 'All orders process within 1-2 days, on their way to you',
//       path: '/policies/shipping-policy',
//       icon: 'Box'
//     },
//     {
//       id: 'gid://shopify/Metaobject/74211491914',
//       title: 'Hassle Free Returns',
//       sub_title: 'Free returns on all orders within 30 days',
//       path: '/policies/refund-policy',
//       icon: 'Return'
//     },
//     {
//       id: 'gid://shopify/Metaobject/74211557450',
//       title: 'Customer Service',
//       sub_title: 'Need help? Call us at',
//       path: null,
//       icon: 'Phone'
//     }
//   ],
//   admin: {
//     contactEmail: 'team@blueridgerecordings.com',
//     timezone: 'EDT',
//     billingAddress: { formatted: [Array], phone: '(470) 400-0587' },
//     hours: [ [Object], [Object] ]
//   }
// }
