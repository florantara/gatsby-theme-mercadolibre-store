import { roboto } from "@theme-ui/presets"
import { IProductListingLayout, ITheme } from "./types/theme"

console.log("roboto", roboto)

const base = roboto
export const productsListing: IProductListingLayout = {
  columns: [1, 2, 4],
  spacing: ["0", "40px", "60px"],
}

export const theme = {
  ...base,
  //breakpoints: ["40em", "52em", "64em"],
  breakpoints: ["200px", "500px", "700px"],
  styles: {
    ...base.styles,
    Layout: {
      maxWidth: "980px",
      marginX: "auto",
    },
  },
  productsisting: {
    ...productsListing,
  },
  productCard: {
    item: {
      fontFamily: base.fonts.heading,
    },
    image: {
      height: ["240px", "320px"],
      bg: "white", // Default background color
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
    },
    meta: {
      display: "block",
    },
    title: {
      display: "block",

      fontSize: [14, 18, 21],
      color: "black",
    },
    price: {
      fontSize: [12, 16, 18],
      color: base.colors.primary,
    },
  },
}
console.log("Theme ", theme)
export default theme
