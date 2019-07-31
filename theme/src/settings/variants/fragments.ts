import { convertHexToRGBA } from "../../utils/convertHexToRGBA"

export const fragments = {
  hero: {
    marginX: "auto",
    background: "linear-gradient(to right, #FFC371, #FF5F6D)",
    color: "white",
  },
  hero_homepage: {
    padding: "1em 3em",
    h3: {
      color: "white",
      textAlign: "center",
    },
    h1: {
      color: "white",
      textAlign: "center",
    },
  },
  paper: {
    maxWidth: "980px",
    margin: "0 auto 30px",
    backgroundColor: "white",
    padding: 30,
    boxShadow: `4px 4px 10px ${convertHexToRGBA("brand_01.3", 0.1)}`,
    h1: {
      marginTop: 0,
    },
  },
}
