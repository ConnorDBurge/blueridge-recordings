import { gql } from "@/lib/utils";

export const FOOTER_QUERY = gql`
  query getFooter {
    banner: metaobjects(type: "banner_cta", first: 10) {
      edges {
        node {
          id
          fields {
            key
            value
          }
        }
      }
    }

    admin: shop {
      contactEmail
      timezone: timezoneAbbreviation
      billingAddress {
        formatted
        phone
      }
    }

    hours: metaobjectByHandle(
      handle: { type: "store_hours", handle: "store-hours" }
    ) {
      hours: fields {
        key
        value
      }
    }
  }
`;
