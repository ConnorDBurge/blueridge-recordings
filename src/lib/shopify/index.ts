import {
  ADMIN_SHOP_QUERY,
  BANNER_QUERY,
  LOCALE_QUERY,
  MARKETS_QUERY,
  MENU_QUERY,
  STOREFRONT_SHOP_QUERY,
} from "@/lib/shopify/queries";
import { _fetch, getPath } from "@/lib/utils";
import {
  BannerObject,
  Connection,
  Footer,
  HTTPRequest,
  Locales,
  Menu,
  Shop,
  ShopAdmin,
  ShopifyMenuOperation,
} from "./types";

const storefrontDomain = process.env.SHOPIFY_STOREFRONT_ENDPOINT || "";
const storefrontToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || "";
const adminDomain = process.env.SHOPIFY_ADMIN_ENDPOINT || "";
const adminToken = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN || "";

/* Fetch Requests */
async function storefront<T>(args: HTTPRequest<T>) {
  return await _fetch({
    domain: storefrontDomain,
    accessToken: storefrontToken,
    accessTokenHeader: "X-Shopify-Storefront-Access-Token",
    ...args,
  });
}

async function admin<T>(args: HTTPRequest<T>) {
  return _fetch({
    domain: adminDomain,
    accessToken: adminToken,
    accessTokenHeader: "X-Shopify-Access-Token",
    ...args,
  });
}

/* Reshape Helper Functions */
const removeEdgesAndNodes = (array: Connection<any>) => {
  return array.edges.map((edge) => edge?.node);
};

const flattenFields = (array: any[]) => {
  return array.map((item) => {
    return {
      id: item.id,
      ...item.fields.reduce((acc: any, field: any) => {
        acc[field.key] = field.value;
        return acc;
      }, {}),
    };
  });
};

/* Query & Mutation Functions */
export async function getStorefront(): Promise<Shop> {
  const res = await storefront({ query: STOREFRONT_SHOP_QUERY });
  return res.body?.data?.storefront || {};
}

export async function getAdmin(): Promise<ShopAdmin> {
  const res = await admin({ query: ADMIN_SHOP_QUERY });
  const hours = res.body?.data?.hours?.hours || [];
  const _admin = res.body?.data?.admin || {};
  return { ..._admin, hours };
}

export async function getLocales(): Promise<Locales> {
  const res = await admin({ query: LOCALE_QUERY });
  return res.body?.data?.locales || [];
}

export async function getMarkets(): Promise<any> {
  const res = await admin({ query: MARKETS_QUERY });
  return res.body?.data?.markets?.nodes || [];
}

export async function getMenu(handle: string): Promise<Menu> {
  const res = await storefront<ShopifyMenuOperation>({
    query: MENU_QUERY,
    variables: { handle },
  });

  const menu = res.body?.data?.menu;

  function calcDepth(items: any[], depth = 0) {
    let maxDepth = depth;
    items?.forEach((item: any) => {
      const childDepth =
        item.items?.length > 0 ? calcDepth(item.items, depth + 1) : depth;
      maxDepth = Math.max(maxDepth, childDepth);
      item.depth = maxDepth - depth;
      item.path = getPath(item.url);
    });
    return maxDepth;
  }

  const totalDepth = calcDepth(menu?.items);
  menu.depth = totalDepth + 1;
  return menu;
}

export async function getBanner(): Promise<BannerObject[]> {
  const res = await admin({ query: BANNER_QUERY });
  const banner = flattenFields(removeEdgesAndNodes(res.body?.data?.banner));
  return banner || {};
}
