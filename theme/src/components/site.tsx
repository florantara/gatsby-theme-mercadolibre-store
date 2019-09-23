import React, { FunctionComponent } from "react"
import { Helmet } from "react-helmet"

// Normalize
import { Global, css } from "@emotion/core"

// Theme UI
/** @jsx jsx */
// @ts-ignore : jsx unused
import { ThemeProvider, Main, jsx } from "theme-ui"
import { theme } from "../settings/theme"

// Components
import Header from "./header"
import Footer from "./footer"
import Copyright from "./copyright"

// Data
import { useMeta } from "../data/siteMeta"

const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
`

interface IProps {
  children: any
  bodyClass?: string // defined in frontmatter for MDX pages in order to provide page-specific styling
}
const Site: FunctionComponent<IProps> = ({ children, bodyClass }) => {
  // Data
  const { site } = useMeta()

  return (
    <div>
      <Helmet>
        <html lang={site.siteMetadata.language || "en"} />
      </Helmet>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <div className={bodyClass}>
          <div sx={{ variant: "siteContainer" }}>
            <Header />
            <Main children={children} />
            <div className="siteContainerBottom">
              <Footer />
              <Copyright />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default Site
