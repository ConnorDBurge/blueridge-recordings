export interface Pair {
  key: string;
  value: string;
}

export type ExtractVariables<T> = T extends { variables: object }
  ? T["variables"]
  : never;

export type HTTPRequest<T> = {
  cache?: RequestCache;
  headers?: Record<string, string>;
  query?: string;
  tags?: string[];
  variables?: ExtractVariables<T>;
};

export interface MenuItem {
  id: string;
  resourceId: string;
  tags: string[];
  title: string;
  type: string;
  url: string;
  items: MenuItem[];
  depth: number;
  path: string;
}

export interface Menu {
  id: string;
  handle?: string;
  items: MenuItem[];
}

export interface ShopifyMenuOperation {
  data: {
    menu?: {
      items: {
        title: string;
        url: string;
      }[];
    };
  };
  variables: {
    handle: string;
  };
}

export interface Shop {
  id: string;
  name: string;
  description: string | undefined;
  primaryDomain: {
    url: string;
  };
  brand: {
    slogan: string | undefined;
    logo: ImageWrapper | undefined;
    squareLogo: ImageWrapper | undefined;
  };
}

export interface ImageWrapper {
  image: {
    url: string;
  };
}

export interface ShopAdmin {
  contactEmail: string;
  timezone: string;
  hours: Pair[];
  billingAddress: {
    formatted: string[];
    phone: string;
  };
}

export interface Locale {
  locale: string;
  name: string;
}

export type Locales = Locale[];
