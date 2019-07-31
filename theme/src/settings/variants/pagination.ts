export const pagination = {
  fontFamily: "body",
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
        color: "brand_01.2",
        textDecoration: "none",
        "&:hover, &:active": {
          color: "brand_01.0",
          textDecoration: "none",
        },
        "&[aria-current]": {
          color: "brand_01.0",
          fontWeight: "bold",
        },
      },
    },
  },
  separator: {
    color: "gray.1",
  },

  rightArrow: {
    paddingLeft: "30px",
    a: {
      color: "brand_01.2",
      "&:hover, &:active": {
        color: "brand_01.0",
      },
    },
  },
  leftArrow: {
    paddingRight: "30px",
    a: {
      color: "brand_01.2",
      "&:hover, &:active": {
        color: "brand_01.0",
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
}
