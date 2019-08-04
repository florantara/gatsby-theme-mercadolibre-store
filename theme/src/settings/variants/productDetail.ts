import { convertHexToRGBA } from "../../utils/convertHexToRGBA"

// Note: borderTopColor and borderBottomColor
// don't consume colors with the Theme UI shorthand
import { colors } from "../colors"

export const productDetail = {
  container: {
    position: "relative",
    fontFamily: "body",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 30,
    padding: 30,
    boxShadow: `4px 4px 10px ${convertHexToRGBA(colors.gray[1], 0.1)}`,
    display: "grid",
    gridGap: 30,
    gridTemplateColumns: "minmax(0, 2fr) 1fr",
    gridTemplateRows: "auto",
    // First set of areas is for Mobile
    // the second is for Tablet,
    // the third for Desktop
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
    color: "gray.5",
  },
  gallery: {
    gridArea: "gallery",
    borderWidth: 1,
    borderColor: "gray.0",
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
        borderColor: "gray.5",
        borderWidth: 2,
      },
      "&.active": {
        borderColor: "gray.5",
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
      color: "gray.1",
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
      fontSize: ["13px", "13px", 1],
    },
  },
  description: {
    gridArea: "description",
    borderTopColor: colors.gray[0],
    borderTopWidth: 1,
    borderTopStyle: "solid",
    paddingTop: 30,
    whiteSpace: "pre-line",
  },
  category: {
    display: "block",
    fontSize: "10px",
    textTransform: "uppercase",
    color: "gray.3",
    paddingBottom: "0.5em",
    fontWeight: "bold",
  },
  price: {
    display: "block",
    fontSize: ["26px", "28px", "30px"],
    color: "black",
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
      fontSize: ["11px", "13px", 2],
      marginBottom: "0.2em",
      fontStyle: "italic",
    },
    percentageOff: {
      fontWeight: "100",
      fontSize: ["11px", "13px", 2],
      color: "mediumseagreen",
      marginLeft: "1em",
    },
  },
}
