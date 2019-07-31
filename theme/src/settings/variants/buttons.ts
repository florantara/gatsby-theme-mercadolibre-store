import { convertHexToRGBA } from "../../utils/convertHexToRGBA"

const buttonBase = {
  appareance: "none",
  cursor: "pointer",
  fontFamily: "body",
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
}

const buttonShared = {
  fontFamily: "body",
  lineHeight: "1.5",
  borderWidth: 1,
  borderStyle: "solid",
  transition: "all 100ms linear",
  padding: "0.7em 3em",
  textTransform: "uppercase",
  fontSize: [2, 1, 0],
}
export const buttons = {
  transparent: { ...buttonBase },
  primary: {
    ...buttonBase,
    ...buttonShared,
    borderColor: "brand_01.0",
    color: "brand_01.3",
    backgroundColor: "brand_01.0",
    boxShadow: `1px 1px 0px ${convertHexToRGBA("brand_01.0", 0)}`,
    "&:hover, &:active": {
      color: "brand_01.0",
      backgroundColor: "brand_01.3",
      boxShadow: `4px 4px 10px ${convertHexToRGBA("brand_01.0", 0.3)}`,
    },
    "&:focus": {
      outlineColor: "brand_01.0",
    },
  },
  primaryOutline: {
    ...buttonBase,
    ...buttonShared,
    borderColor: "brand_01.0",
    color: "brand_01.0",
    backgroundColor: "transparent",
    boxShadow: `1px 1px 0px ${convertHexToRGBA("brand_01.0", 0)}`,
    "&:hover, &:active": {
      color: "white",
      backgroundColor: "brand_01.0",
      boxShadow: `4px 4px 10px ${convertHexToRGBA("brand_01.0", 0.3)}`,
    },
    "&:focus": {
      outlineColor: "brand_01.0",
    },
  },
  secondary: {
    ...buttonBase,
    ...buttonShared,
    borderColor: "brand_02.0",
    color: "brand_01.3",
    backgroundColor: "brand_02.0",
    boxShadow: `1px 1px 0px ${convertHexToRGBA("brand_02.0", 0)}`,
    "&:hover, &:active": {
      color: "brand_02.0",
      backgroundColor: "brand_01.3",
      boxShadow: `4px 4px 10px ${convertHexToRGBA("brand_02.0", 0.3)}`,
    },
    "&:focus": {
      outlineColor: "brand_02.0",
    },
  },
  secondaryOutline: {
    ...buttonBase,
    ...buttonShared,
    borderColor: "brand_02.0",
    color: "brand_02.0",
    backgroundColor: "transparent",
    boxShadow: `1px 1px 0px ${convertHexToRGBA("brand_02.0", 0)}`,
    "&:hover, &:active": {
      color: "brand_01.3",
      backgroundColor: "brand_02.0",
      boxShadow: `4px 4px 10px ${convertHexToRGBA("brand_02.0", 0.3)}`,
    },
    "&:focus": {
      outlineColor: "brand_02.0",
    },
  },
}
