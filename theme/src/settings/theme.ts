import { roboto } from "@theme-ui/presets"
import { convertHexToRGBA } from "../utils/convertHexToRGBA"

console.log("roboto base theme", roboto)

const base = roboto

export const theme = {
  ...base,
  colors: {
    ...base.colors,
    gray: ["#C1C5CD", "#A8ADB9", "#68737D", "#515B65", "#363D45"],
  },
  breakpoints: ["40em", "52em", "64em"],
  styles: {
    ...base.styles,
    Layout: {
      maxWidth: "980px",
      marginX: "auto",
      paddingX: [20, 30],
    },
  },

  // Variants (aka: components styling):
  siteWrapper: {
    backgroundColor: "#FAFAFA",
  },
  productsListing: {
    columns: [1, 2, 3],
    space: ["0", "40px", "30px"],
    header: {
      title: {
        width: "50%",
      },
      paginationContext: {
        fontSize: [base.fontSizes[2], base.fontSizes[1], base.fontSizes[0]],
        fontFamily: base.fonts.body,
        width: "50%",
        textAlign: "right",
      },
    },
  },
  productCard: {
    item: {
      overflow: "hidden",
      fontFamily: base.fonts.heading,
      borderWidth: "1px",
      borderColor: base.colors.muted,
      borderStyle: "solid",
      borderRadius: "5px",
      transition: "box-shadow 10ms linear",
      backgroundColor: "white",
      boxShadow: `4px 4px 10px 5px ${convertHexToRGBA(base.colors.muted, 0)}`,
      "&:hover": {
        boxShadow: `4px 4px 5px 0px ${convertHexToRGBA(base.colors.muted, 1)}`,
      },
    },
    image: {
      height: ["140px", "220px"],
      bg: "white",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      padding: "20px",
      "&:hover": {
        span: {
          opacity: 1,
        },
      },
    },
    actionBox: {
      display: "flex",
      position: "absolute",
      zIndex: 2,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      backgroundColor: convertHexToRGBA(base.colors.secondary, 0.8),
      opacity: 0,
      transition: "opacity 100ms linear",
      span: {
        borderColor: "white",
        color: "white",
        borderWidth: 1,
        borderStyle: "solid",
        display: "grid",
        placeItems: "center",
        fontSize: 10,
        fontWeight: "bold",
        textTransform: "uppercase",
        padding: "0.6em 1.2em",
      },
    },
    meta: {
      display: "block",
      padding: "20px",
      borderTopWidth: "1px",
      borderTopColor: base.colors.muted,
      borderTopStyle: "solid",
    },
    title: {
      display: "block",
      fontSize: [16, 14, 15],
      color: "black",
      fontWeight: "100",
      paddingY: "0.5em",
      lineHeight: "1.5em",
      maxHeight: "calc( 3em + 1em ) ", // calculate lineHeight + paddingY
      overflow: "hidden",
    },
    price: {
      display: "block",
      fontSize: [14, 18, 20],
      color: base.colors.primary,
      fontWeight: "bold",
    },
    category: {
      display: "block",
      fontSize: "10px",
      textTransform: "uppercase",
      color: "gray.2",
      paddingBottom: "0.5em",
      fontWeight: "bold",
    },
  },
  pagination: {
    fontFamily: base.fonts.body,
    display: "flex",
    justifyContent: "center",
    padding: ["45px 0 0", "45px 0 20px"],
    ul: {
      display: "flex",
      listStyle: "none",
      margin: 0,
      padding: 0,
      li: {
        minWidth: ["1.5em", "2em"],
        a: {
          color: base.colors.text,
          textDecoration: "none",
          "&:hover, &:active": {
            color: base.colors.primary,
            textDecoration: "none",
          },
          "&[aria-current]": {
            color: base.colors.primary,
            fontWeight: "bold",
          },
        },
      },
    },
    separator: {
      color: "gray.0",
    },

    rightArrow: {
      paddingLeft: "30px",
      a: {
        color: base.colors.text,
        "&:hover, &:active": {
          color: base.colors.primary,
        },
      },
    },
    leftArrow: {
      paddingRight: "30px",
      a: {
        color: base.colors.text,
        "&:hover, &:active": {
          color: base.colors.primary,
        },
      },
    },
    loadMoreButtonWrapper: {
      textAlign: "center",
      paddingTop: "45px;",
    },
    loadMoreButton: {
      appareance: "none",
      cursor: "pointer",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: base.colors.primary,
      color: base.colors.primary,
      background: "transparent",
      transition: "all 100ms linear",
      padding: "0.9em 3em",
      textTransform: "uppercase",
      fontSize: [base.fontSizes[2], base.fontSizes[1], base.fontSizes[0]],
      boxShadow: `1px 1px 0px ${convertHexToRGBA(base.colors.primary, 0)}`,

      "&:hover, &:active": {
        color: "white",
        backgroundColor: base.colors.primary,
        boxShadow: `4px 4px 10px ${convertHexToRGBA(base.colors.primary, 0.3)}`,
      },
      "&:focus": {
        outlineColor: base.colors.primary,
      },
    },
  },
}
export default theme
