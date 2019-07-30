import React, { FunctionComponent } from "react"

// Normalize
import Normalize from "react-normalize"

// Theme UI
/** @jsx jsx */
import { ThemeProvider, Layout as ThemeLayout, Main, jsx } from "theme-ui"
import theme from "../settings/theme"

// Components
import Header from "./header"
import Copyright from "./copyright"

interface IProps {
  children: any
}
const Layout: FunctionComponent<IProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <div sx={{ variant: "siteWrapper" }}>
        <Header />
        <ThemeLayout>
          <Main children={children} />
        </ThemeLayout>
        <Copyright />
      </div>
    </ThemeProvider>
  )
}

export default Layout
