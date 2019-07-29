interface ISiteConfig {
  productsListing: {
    pageTitle: string
    paginationType: "loadMore" | "pages"
    loadMoreAmount: number
    loadMoreButtonLabel: string
    loadMoreNoMoreText: string
    productCard: {
      showImageActionBox: boolean
      showTitle: boolean
      showPrice: boolean
      showCategory: boolean
    }
  }
  productDetail: {
    showPrice: boolean
    showCategory: boolean
  }
}

export const siteConfig: ISiteConfig = {
  productsListing: {
    pageTitle: "Productos",
    paginationType: "loadMore", // if set to "pages" but no pages were created it will fallback to "loadMore"
    loadMoreAmount: 6,
    loadMoreButtonLabel: "Cargar más",
    loadMoreNoMoreText: "Fin",
    productCard: {
      showImageActionBox: true,
      showTitle: true,
      showPrice: true,
      showCategory: true,
    },
  },
  productDetail: {
    showPrice: true,
    showCategory: true,
  },
}
export default siteConfig
