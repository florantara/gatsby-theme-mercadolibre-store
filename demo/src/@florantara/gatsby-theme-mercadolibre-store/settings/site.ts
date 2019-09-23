// In settings/site.js
import merge from "lodash/merge"
import { siteConfig as base } from "@florantara/gatsby-theme-mercadolibre-store/src/settings/site"

export const siteConfig = merge(base, {
  productDetail: {
    showMercadoLibreButton: true,
    showAttributes: false,
  },
})
