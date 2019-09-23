// Variants
import {
  siteContainer,
  siteHeader,
  siteFooter,
  buttons,
  productsListing,
  pagination,
  productCard,
  productDetail,
  copyright,
  fragments,
} from "./variants"

// Colors
import { colors } from "./colors"

// Theme UI
export const theme = {
  colors,
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: ["12px", "14px", "16px", "18px", "20px", "22px", "24px", "27px"],
  fonts: {
    heading: "Roboto, system-ui, sans-serif",
    body: "Roboto, system-ui, sans-serif",
  },
  styles: {
    Layout: {
      marginX: "auto",
      "&.Layout--compact": {
        maxWidth: "980px",
        paddingX: [20, 30],
        minHeight: "auto",
      },
      "&.Layout--tiny": {
        maxWidth: "680px",
        paddingX: [20, 30],
      },
    },

    Header: {
      "&.Header--compact": {
        width: "100%",
        maxWidth: "980px",
        marginX: "auto",
        borderColor: colors.gray[0],
        borderWidth: "1px",
        borderStyle: "solid",
      },
      fontFamily: "body",
      backgroundColor: "white",
      paddingY: "5px",
      paddingX: "30px",
      borderBottomWidth: "1px",
      borderBottomColor: colors.gray[0],
      borderBottomStyle: "solid",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: ["wrap", "auto", "auto"],
    },
    Footer: {
      fontFamily: "body",
      fontSize: [12, 13, 13],
      fontWeight: "light",
      color: "brand_01.3",
      backgroundColor: "rebeccapurple",
      ul: {
        margin: 0,
        padding: "1em 0 0 0",
        listStyle: "none",
        lineHeight: 1,
        li: {
          fontSize: [15, 14, 13],
          marginBottom: ".5em",
          svg: {
            marginRight: "1em",
          },
          a: {
            color: "brand_01.3",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "none",
              color: "brand_01.3",
            },
            "&[aria-current]": {
              borderBottomColor: "inherit",
              borderBottomWidth: 2,
              borderBottomStyle: "solid",
            },
          },
        },
      },
    },
    h1: {
      fontSize: [28, 30, 32],
      fontFamily: "heading",
    },
    h2: {
      fontSize: [24, 26, 28],
      fontFamily: "heading",
    },
    p: {
      lineHeight: "1.7em",
      code: {
        fontSize: "1.1em",
        backgroundColor: "#ffdeb8",
        paddingX: "0.5em",
        borderRadius: "3px",
        color: "#222",
      },
    },
    blockquote: {
      padding: "0.1em 1em",
      backgroundColor: "#F7F0BA",
      margin: "0px",
      borderRadius: "3px",
      fontSize: 1,
    },
    ul: {
      margin: "0 0 0 1em",
      padding: 0,
      lineHeight: "1.7",
      fontFamily: "body",
      a: {
        textDecoration: "none",
      },
    },
    pre: {
      padding: "20px",
      borderRadius: "5px",
      backgroundColor: "gray.0",
      whiteSpace: "pre-wrap",
      code: {
        fontSize: "1em",
      },
    },
    a: {
      color: "brand_01.2",
    },
  },

  /*
   *
   * Variants (aka: components styling)
   *
   */

  siteContainer,
  siteHeader,
  siteFooter,
  buttons,
  productsListing,
  productCard,
  pagination,
  productDetail,
  copyright,
  fragments,
}
