export const siteFooter = {
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "stretch",
    flexWrap: ["wrap", "auto", "auto"],
    maxWidth: "980px",
    marginX: "auto",
    paddingX: "30px",
    aside: {
      flexGrow: 1,
      textAlign: "left",
    },
  },

  logoContainer: {
    width: "auto", // Set a specific width if using a logo image
    height: "auto",
    img: {
      maxWidth: "100%",
    },
    a: {
      display: "block",
      textDecoration: "none",
      color: "white",
      "&:hover": {
        textDecoration: "none",
      },
    },
  },
  textLogo: {
    fontSize: [1],
    textTransform: "uppercase",
    fontWeight: "bold",
  },
}
