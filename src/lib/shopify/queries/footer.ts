import { gql } from '@/lib/utils'

export const BANNER_QUERY = gql`
  query getBanner {
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
  }
`
