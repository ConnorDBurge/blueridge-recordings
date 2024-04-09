import { gql } from "@/lib/utils";
import { menuFragment } from "@/lib/shopify/fragments";

export const MENU_QUERY = gql`
  query getMenu($handle: String!) {
    menu(handle: $handle) {
      ...menu
    }
  }
  ${menuFragment}
`;
