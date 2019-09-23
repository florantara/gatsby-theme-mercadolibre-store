// In settings/theme.js
import merge from "lodash/merge"
import { theme as base } from "@florantara/gatsby-theme-mercadolibre-store/src/settings/theme"

export const theme = merge(base, {
  productDetail: {
    container: {
      gridTemplateAreas: [
        `
            "title title"
            "meta meta"
            "contact contact"
            "gallery gallery"
            "description description"
            `,
        `
            "title title"
            "meta meta"
            "gallery gallery"
            "description description"
            `,
        `
            "title title"
            "meta meta"
            "gallery gallery"
            "description description"
            `,
      ],
    },
  },
})
