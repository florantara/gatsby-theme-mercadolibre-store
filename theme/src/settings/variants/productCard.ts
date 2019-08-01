import { convertHexToRGBA } from "../../utils/convertHexToRGBA"
// Note: borderTopColor and borderBottomColor
// don't consume colors with the Theme UI shorthand
import { colors } from "../colors"

export const productCard = {
  item: {
    fontFamily: "body",
    borderWidth: "1px",
    borderColor: colors.gray[0],
    borderStyle: "solid",
    borderRadius: "5px",
    transition: "box-shadow 10ms linear",
    backgroundColor: "white",
    listStyle: "none",
    boxShadow: `4px 4px 10px ${convertHexToRGBA(colors.gray[1], 0.1)}`,
    "&:hover": {
      boxShadow: `4px 4px 10px ${convertHexToRGBA(colors.gray[1], 0.4)}`,
      ".actionBox": {
        opacity: 1,
      },
      ".gatsby-image-wrapper": {
        transform: "scale(1.1)",
      },
    },
    a: {
      textDecoration: "none",
      display: "block",
      "&:focus, &:active": {
        outlineWidth: "2px",
        outlineStyle: "solid",
        outlineColor: colors.brand_02[2],
      },
    },
  },
  image: {
    height: ["240px", "140px", "220px"],
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
      borderColor: "black",
      backgroundColor: "brand_01.3",
      color: "black",
      borderWidth: 1,
      borderStyle: "solid",
      display: "grid",
      placeItems: "center",
      fontSize: "10px",
      fontWeight: "bold",
      textTransform: "uppercase",
      padding: "0.6em 1.2em",
    },
  },
  meta: {
    display: "block",
    padding: "20px",
    borderTopWidth: "1px",
    borderTopColor: colors.gray[0],
    borderTopStyle: "solid",
  },
  title: {
    display: "block",
    fontSize: [3, 2, 2],
    color: "black",
    fontWeight: "100",
    paddingY: "0.5em",
    lineHeight: "1.5em",
    maxHeight: ["2em", "2em", "calc( 3em + 1em )"], // calculate lineHeight + paddingY
    overflow: "hidden",
  },
  price: {
    display: "block",
    fontSize: [2, 4, 5],
    color: "black",
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
      fontSize: ["11px", "13px", "14px"],
      marginBottom: "0.2em",
      fontStyle: "italic",
    },
    percentageOff: {
      fontWeight: "light",
      fontSize: ["11px", "13px", "15px"],
      color: "mediumseagreen",
      marginLeft: "1em",
    },
  },
  category: {
    display: "block",
    fontSize: "10px",
    textTransform: "uppercase",
    color: "gray.3",
    paddingBottom: "0.5em",
    fontWeight: "bold",
  },
}
