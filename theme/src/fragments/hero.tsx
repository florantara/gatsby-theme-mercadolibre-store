import React, { FunctionComponent } from "react"

// Theme UI
/** @jsx jsx */
// @ts-ignore : jsx unused
import { jsx } from "theme-ui"

interface IProps {
  name?: string // this is so it can be overritten with a variant,
  children: any
  layout?: "compact" | "tiny"
}

// Bring in the base styles for this fragment
import { theme } from "../settings/theme"

const Hero: FunctionComponent<IProps> = ({ name, children, layout }) => {
  const maxWidth =
    layout && layout === "compact"
      ? "980px"
      : layout === "tiny"
      ? "680px"
      : "none"
  return (
    <section
      sx={{
        ...theme.fragments.hero,
        maxWidth,
        variant: `fragments.hero_${name}`,
      }}
    >
      {children}
    </section>
  )
}

export default Hero
