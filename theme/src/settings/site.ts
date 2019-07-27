interface ISiteConfig {
  productsListing: {
    pageTitle: string
    paginationType: "loadMore" | "pages"
    loadMoreButtonLabel?: string
  }
}

export const siteConfig: ISiteConfig = {
  productsListing: {
    pageTitle: "Productos",
    paginationType: "pages",
    loadMoreButtonLabel: "Cargar más",
  },
}
export default siteConfig
