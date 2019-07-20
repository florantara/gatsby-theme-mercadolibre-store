export interface ISiteTitle {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export interface ITheme {
  // Needs support
}

export interface IProductListingLayout {
  columns: number[]
  spacing: string[]
}
