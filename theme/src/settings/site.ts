interface ISiteConfig {
  productsListing: {
    pageTitle: string
    paginationType: "loadMore" | "pages"
    loadMoreButtonLabel?: string
    productCard: {
      showImageActionBox: boolean
      showTitle: boolean
      showPrice: boolean
      showCategory: boolean
    }
  }
}

export const siteConfig: ISiteConfig = {
  productsListing: {
    pageTitle: "Productos",
    paginationType: "loadMore",
    loadMoreButtonLabel: "Cargar más",
    productCard: {
      showImageActionBox: true,
      showTitle: true,
      showPrice: true,
      showCategory: true,
    },
  },
}
export default siteConfig
