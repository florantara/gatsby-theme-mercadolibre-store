import React, { FunctionComponent } from "react"

// Theme UI
/** @jsx jsx */
// @ts-ignore : jsx unused
import { jsx } from "theme-ui"

interface IProps {
  id?: string // this is so it can be overritten with a variant,
  children: any
}

// Bring in the base styles for this fragment
import { theme } from "../settings/theme"

const Paper: FunctionComponent<IProps> = ({ id, children }) => {
  return (
    <article
      sx={{ ...theme.fragments.paper, variant: `fragments.paper_${id}` }}
    >
      {children}
    </article>
  )
}

export default Paper
