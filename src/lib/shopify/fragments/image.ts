import { gql } from "@/lib/utils";

export const imageFragment = gql`
  fragment image on Image {
    url
    altText
    width
    height
  }
`;
