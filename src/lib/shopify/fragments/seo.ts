import { gql } from "@/lib/utils";

export const seoFragment = gql`
  fragment seo on SEO {
    description
    title
  }
`;
