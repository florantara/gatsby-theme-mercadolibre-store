import { IProductNode } from "./product"
export interface ISiteTitle {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export interface IPathContext {
  additionalContext?: any
  first?: boolean
  last?: boolean
  group?: IProductNode[]
  index?: number
  isCreatedByStatefulCreatePages: boolean
  paginatedPagesExist: boolean
  pageCount?: number
  pathPrefix?: string
}
