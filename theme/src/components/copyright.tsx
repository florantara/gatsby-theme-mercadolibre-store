import React, { FunctionComponent } from "react"

// Theme UI
/** @jsx jsx */
// @ts-ignore : jsx unused
import { jsx } from "theme-ui"

// Data
import { useMeta } from "../data/siteMeta"

// Site config
import { siteConfig } from "../settings/site"

const Copyright: FunctionComponent = () => {
  // Data
  const { site } = useMeta()
  // Site Config
  const { copyright } = siteConfig
  return (
    <aside sx={{ variant: "copyright" }}>
      {copyright} - {site.siteMetadata.title}
    </aside>
  )
}

export default Copyright
