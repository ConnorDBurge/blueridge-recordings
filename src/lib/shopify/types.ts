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

export type MenuItem = {
  id: string;
  resourceId: string;
  tags: string[];
  title: string;
  type: string;
  url: string;
  items: MenuItem[];
  depth: number;
  path: string;
};

export type Menu = {
  id: string;
  handle?: string;
  items: MenuItem[];
};

export type ShopifyMenuOperation = {
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
};

export type Shop = {
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
};

export type ImageWrapper = {
  image: {
    url: string;
  };
};

export type ShopAdmin = {
  contactEmail: string;
  timezone: string;
  hours: Pair[];
  billingAddress: {
    formatted: string[];
    phone: string;
  };
};

export type Locale = {
  locale: string;
  name: string;
};

export type Locales = Locale[];

export type Connection<T> = {
  edges: Array<Edge<T>>;
};

export type Edge<T> = {
  node: T;
};
