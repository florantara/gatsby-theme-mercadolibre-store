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
    Header: {
      "&.compact": {
        maxWidth: "980px",
      },
      fontFamily: base.fonts.body,

      backgroundColor: "white",
      paddingY: "15px",
      paddingX: "30px",
      marginBottom: "30px",
      borderBottomWidth: "1px",
      borderBottomColor: base.colors.muted,
      borderBottomStyle: "solid",
      display: "flex",
      alignItems: "center",
    },
    ul: {
      margin: "0 0 0 1em",
      padding: 0,
      lineHeight: "1.7",
      fontFamily: base.fonts.body,
    },
  },

  /*
   *
   * Variants (aka: components styling)
   *
   */
  siteWrapper: {
    backgroundColor: "#FAFAFA",
  },
  siteHeader: {
    textLogo: {
      fontSize: "14px",
      textTransform: "uppercase",
      fontWeight: "bold",
      marginRight: "40px",
    },
    navigation: {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: "none",
        lineHeight: 1,
        display: "flex",
        alignItems: "center",
        li: {
          fontSize: [16, 15, 14],
          marginRight: "1.5em",
          a: {
            color: base.colors.text,
            textDecoration: "none",
            "&:hover": {
              textDecoration: "none",
              color: base.colors.secondary,
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
  },
  staticPageContainer: {
    backgroundColor: "white",
    padding: 30,
    boxShadow: `4px 4px 10px ${convertHexToRGBA(base.colors.text, 0.1)}`,
    h1: {
      marginTop: 0,
    },
    "&.indexPage": {
      backgroundColor: "transparent",
      boxShadow: "none",
      padding: 0,
    },
  },

  buttons: {
    transparent: {
      appareance: "none",
      cursor: "pointer",
      fontFamily: base.fonts.body,
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none",
      },

      // They can be <a> or have one nested
      a: {
        display: "block",
        color: "inherit",
        textDecoration: "none",
        "&:hover": {
          textDecoration: "none",
        },
      },
    },
    primary: {
      appareance: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      lineHeight: "1.5",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: base.colors.primary,
      color: "white",
      backgroundColor: base.colors.primary,
      transition: "all 100ms linear",
      padding: "0.7em 3em",
      textTransform: "uppercase",
      fontFamily: base.fonts.body,
      fontSize: [base.fontSizes[2], base.fontSizes[1], base.fontSizes[0]],
      boxShadow: `1px 1px 0px ${convertHexToRGBA(base.colors.primary, 0)}`,
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none",
      },
      "&:hover, &:active": {
        color: base.colors.primary,
        backgroundColor: "white",
        boxShadow: `4px 4px 10px ${convertHexToRGBA(base.colors.primary, 0.3)}`,
      },
      "&:focus": {
        outlineColor: base.colors.primary,
      },

      // They can be <a> or have one nested
      a: {
        display: "block",
        color: "inherit",
        textDecoration: "none",
        "&:hover": {
          textDecoration: "none",
        },
      },
    },
    primaryOutline: {
      appareance: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      lineHeight: "1.5",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: base.colors.primary,
      color: base.colors.primary,
      background: "transparent",
      transition: "all 100ms linear",
      padding: "0.7em 3em",
      textTransform: "uppercase",
      fontFamily: base.fonts.body,
      fontSize: [base.fontSizes[2], base.fontSizes[1], base.fontSizes[0]],
      boxShadow: `1px 1px 0px ${convertHexToRGBA(base.colors.primary, 0)}`,
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none",
      },
      "&:hover, &:active": {
        color: "white",
        backgroundColor: base.colors.primary,
        boxShadow: `4px 4px 10px ${convertHexToRGBA(base.colors.primary, 0.3)}`,
      },
      "&:focus": {
        outlineColor: base.colors.primary,
      },

      // They can be <a> or have one nested
      a: {
        display: "block",
        color: "inherit",
        textDecoration: "none",
        "&:hover": {
          textDecoration: "none",
        },
      },
    },
    secondary: {
      appareance: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      lineHeight: "1.5",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: base.colors.secondary,
      color: "white",
      backgroundColor: base.colors.secondary,
      transition: "all 100ms linear",
      padding: "0.7em 3em",
      textTransform: "uppercase",
      fontFamily: base.fonts.body,
      fontSize: [base.fontSizes[2], base.fontSizes[1], base.fontSizes[0]],
      boxShadow: `1px 1px 0px ${convertHexToRGBA(base.colors.secondary, 0)}`,
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none",
      },
      "&:hover, &:active": {
        color: base.colors.secondary,
        backgroundColor: "white",
        boxShadow: `4px 4px 10px ${convertHexToRGBA(
          base.colors.secondary,
          0.3
        )}`,
      },
      "&:focus": {
        outlineColor: base.colors.secondary,
      },

      // They can be <a> or have one nested
      a: {
        display: "block",
        color: "inherit",
        textDecoration: "none",
        "&:hover": {
          textDecoration: "none",
        },
      },
    },
    secondaryOutline: {
      appareance: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      lineHeight: "1.5",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: base.colors.secondary,
      color: base.colors.secondary,
      background: "transparent",
      transition: "all 100ms linear",
      padding: "0.7em 3em",
      textTransform: "uppercase",
      fontFamily: base.fonts.body,
      fontSize: [base.fontSizes[2], base.fontSizes[1], base.fontSizes[0]],
      boxShadow: `1px 1px 0px ${convertHexToRGBA(base.colors.secondary, 0)}`,
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none",
      },
      "&:hover, &:active": {
        color: "white",
        backgroundColor: base.colors.secondary,
        boxShadow: `4px 4px 10px ${convertHexToRGBA(
          base.colors.secondary,
          0.3
        )}`,
      },
      "&:focus": {
        outlineColor: base.colors.secondary,
      },

      // They can be <a> or have one nested
      a: {
        display: "block",
        color: "inherit",
        textDecoration: "none",
        "&:hover": {
          textDecoration: "none",
        },
      },
    },
  },
  productsListing: {
    columns: [1, 2, 3], // Maybe this belongs to the SiteConfig?
    space: ["30px", "40px", "30px"],
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
        ".actionBox": {
          opacity: 1,
        },
        ".gatsby-image-wrapper": {
          transform: "scale(1.1)",
        },
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
      ".gatsby-image-wrapper": {
        transition: "transform 200ms ease-in",
      },
      "&:hover": {
        ".imageActionBox": {
          opacity: 1,
        },
      },
    },
    imageActionBox: {
      display: "flex",
      position: "absolute",
      zIndex: 2,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      backgroundColor: convertHexToRGBA("#FFFFFF", 0.6),
      opacity: 0,
      transition: "opacity 100ms linear",
      span: {
        borderColor: base.colors.text,
        backgroundColor: "white",
        color: base.colors.text,
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
      maxHeight: ["1em", "1em", "calc( 3em + 1em )"], // calculate lineHeight + paddingY
      overflow: "hidden",
    },
    price: {
      display: "block",
      fontSize: [14, 18, 20],
      color: base.colors.text,
      fontWeight: "bold",
      onSaleInfo: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
      },
      originalPrice: {
        display: "block",
        width: "100%",
        color: "gray.1",
        textDecoration: "line-through",
        fontWeight: "100",
        fontSize: [11, 13, 14],
        marginBottom: "0.2em",
        fontStyle: "italic",
      },
      percentageOff: {
        fontWeight: "100",
        fontSize: [11, 13, 15],
        color: "mediumseagreen",
        marginLeft: "1em",
      },
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
      paddingY: "45px",
      button: {
        display: "inline-flex",
      },
    },
  },
  productDetail: {
    container: {
      position: "relative",
      fontFamily: base.fonts.body,
      backgroundColor: "white",
      marginTop: 10,
      padding: 30,
      boxShadow: `4px 4px 10px ${convertHexToRGBA(base.colors.text, 0.1)}`,
      display: "grid",
      gridGap: 30,
      gridTemplateColumns: "minmax(0, 2fr) 1fr",
      gridTemplateRows: "auto",
      // First set of areas is for Mobile
      // the second is for Desktop
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
        "gallery meta"
        "description description"
        `,
      ],
    },
    title: {
      gridArea: "title",
      h1: {
        marginTop: "0.5em",
        marginBottom: 0,
      },
    },
    shareIcon: {
      position: "absolute",
      top: 20,
      right: 20,
      cursor: "pointer",
      color: "gray.4",
    },
    gallery: {
      gridArea: "gallery",
      borderWidth: 1,
      borderColor: base.colors.muted,
      borderStyle: "solid",

      ".gatsby-image-wrapper": { height: "100%", width: "100%" },
      ".image-gallery-slide-wrapper": { height: "300px", width: "auto" },
      ".image-gallery-slide": {
        display: "flex",
        height: "300px",
        alignItems: "center",
      },
      ".image-gallery-thumbnails": {
        paddingBottom: 0,
      },
      ".image-gallery-thumbnail": {
        borderWidth: 2,
        "&:focus": {
          outline: "none",
          borderColor: "gray.4",
          borderWidth: 2,
        },
        "&.active": {
          borderColor: "gray.4",
          borderWidth: 2,
        },
      },
    },
    meta: {
      gridArea: "meta",
      h5: {
        marginTop: 0,
        fontSize: "10px",
        textTransform: "uppercase",
        color: "gray.2",
        fontWeight: "bold",
      },
      ".buyButton": {
        display: "inline-block",
        marginTop: 20,
        svg: {
          marginLeft: 10,
        },
      },

      ul: {
        listStyle: "none",
        marginTop: "2em",
        fontSize: [11, 13, 14],
      },
    },
    description: {
      gridArea: "description",
      borderTopColor: base.colors.muted,
      borderTopWidth: 1,
      borderTopStyle: "solid",
      paddingTop: 30,
      whiteSpace: "pre-line",
    },
    category: {
      display: "block",
      fontSize: "10px",
      textTransform: "uppercase",
      color: "gray.2",
      paddingBottom: "0.5em",
      fontWeight: "bold",
    },
    price: {
      display: "block",
      fontSize: [20, 24, 27],
      color: base.colors.text,
      fontWeight: "bold",
      paddingY: "0.5em",
      onSaleInfo: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
      },
      originalPrice: {
        display: "block",
        width: "100%",
        color: "gray.1",
        textDecoration: "line-through",
        fontWeight: "100",
        fontSize: [11, 13, 14],
        marginBottom: "0.2em",
        fontStyle: "italic",
      },
      percentageOff: {
        fontWeight: "100",
        fontSize: [11, 13, 15],
        color: "mediumseagreen",
        marginLeft: "1em",
      },
    },
  },
}
export default theme
