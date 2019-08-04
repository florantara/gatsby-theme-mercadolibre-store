import { convertHexToRGBA } from "../../utils/convertHexToRGBA"
import { colors } from "../colors"

export const fragments = {
  hero: {
    marginX: "auto",
    background: "linear-gradient(45deg, #FFC371, #FF5F6D)",
    color: "white",
  },
  hero_homepage: {
    padding: "1em 3em",
    marginBottom: "30px",
    h3: {
      color: "white",
      textAlign: "center",
    },
    h2: {
      color: "white",
      textAlign: "center",
    },
    h1: {
      color: "white",
      textAlign: "center",
    },
  },
  featuredProducts_homepage: {
    marginBottom: "30px",
  },
  paper: {
    maxWidth: "calc( 980px - 60px )",
    margin: "0 auto 30px",
    backgroundColor: "white",
    padding: "30px",
    boxShadow: `4px 4px 10px ${convertHexToRGBA(colors.gray[1], 0.1)}`,

    "h1:first-of-type": {
      marginTop: 0,
    },
    "h2:first-of-type": {
      marginTop: 0,
    },
    a: {
      textDecoration: "none",
    },
  },
}
