interface ILink {
  label: string
  link: string
}

export type TSocialLinkType = "facebook" | "instagram" | "twitter" | "whatsapp" // TODO: support more

interface ILinkWithType extends ILink {
  type: TSocialLinkType
}

interface ISiteConfig {
  header: {
    layout: "compact" | "wide"
    mainNavigationItems?: ILink[]
    secondaryNavigation: {
      showMLStoreLink: boolean
      showContactLink: boolean
      contactType?: "email" | "link" // TODO: "page"/ "tel"
      contactUrl?: string
      showWhatsAppLink: boolean
      whatsAppNumber?: string
    }
  }
  footer: {
    showSocialLinksColumn: boolean
    socialLinks?: ILinkWithType[]
    showInternalLinksColumn: boolean
    internalLinks?: ILink[]
  }
  copyright: string
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
  header: {
    layout: "wide",
    mainNavigationItems: [
      {
        label: "inicio",
        link: "/",
      },
      {
        label: "productos",
        link: "/productos",
      },
    ],
    secondaryNavigation: {
      showMLStoreLink: true, // Shows a link to the ML Store
      showContactLink: true, // Shows a Mail icon
      contactType: "email",
      contactUrl: "florenciaantara@gmail.com",
      showWhatsAppLink: false, // Shows a WhatsApp icon
    },
  },
  footer: {
    showSocialLinksColumn: false,
    socialLinks: [
      {
        type: "whatsapp",
        label: "WhatsApp",
        link: "https://api.whatsapp.com/send?phone=5491123853660",
      },
      {
        type: "facebook",
        label: "Facebook",
        link: "https://www.facebook.com/JSWeekly/",
      },
    ],
    showInternalLinksColumn: false,
    internalLinks: [
      {
        label: "shop",
        link: "/productos",
      },
    ],
  },
  copyright: "Copyright © 2019",

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
