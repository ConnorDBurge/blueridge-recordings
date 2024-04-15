import { gql } from '@/lib/utils'

export const menuFragment = gql`
  fragment MenuItem on MenuItem {
    id
    resourceId
    tags
    title
    type
    url
  }

  fragment GrandChildMenuItem on MenuItem {
    ...MenuItem
  }

  fragment ChildMenuItem on MenuItem {
    ...MenuItem
    items {
      ...GrandChildMenuItem
    }
  }

  fragment ParentMenuItem on MenuItem {
    ...MenuItem
    items {
      ...ChildMenuItem
    }
  }

  fragment menu on Menu {
    id
    title
    handle
    items {
      ...ParentMenuItem
    }
  }
`
