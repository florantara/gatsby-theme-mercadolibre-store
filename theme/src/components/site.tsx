import React, { FunctionComponent } from "react"

// Normalize
import { Global, css } from "@emotion/core"

// Theme UI
/** @jsx jsx */
import { ThemeProvider, Main, jsx } from "theme-ui"
import { theme } from "../settings/theme"

// Components
import Header from "./header"
import Footer from "./footer"
import Copyright from "./copyright"

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
}
const Site: FunctionComponent<IProps> = ({ children }) => {
  return (
    <div>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <div sx={{ variant: "siteContainer" }}>
          <Header />
          <Main children={children} />
          <div className="siteContainerBottom">
            <Footer />
            <Copyright />
          </div>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default Site