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
    showMercadoLibreButton: boolean
    showPrice: boolean
    showShareIcon: boolean
    showCategory: boolean
    showDescription: boolean
    showAttributes: boolean
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
    showMercadoLibreButton: true,
    showPrice: true,
    showShareIcon: true,
    showCategory: true,
    showDescription: true,
    showAttributes: true,
  },
}
export default siteConfig
