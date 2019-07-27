interface ISiteConfig {
  productsListing: {
    pageTitle: string
    paginationType: "loadMore" | "pages"
    loadMoreButtonLabel?: string
    productCard: {
      showActionBox: boolean
      showTitle: boolean
      showPrice: boolean
      showCategory: boolean
    }
  }
}

export const siteConfig: ISiteConfig = {
  productsListing: {
    pageTitle: "Productos",
    paginationType: "pages",
    loadMoreButtonLabel: "Cargar más",
    productCard: {
      showActionBox: true,
      showTitle: true,
      showPrice: true,
      showCategory: true,
    },
  },
}
export default siteConfig
