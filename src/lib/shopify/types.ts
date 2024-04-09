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

export type Menu = {
  title: string;
  path: string;
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
