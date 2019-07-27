import React, { FunctionComponent } from "react"

// Theme UI
import { ThemeProvider, Layout as ThemeLayout, Main } from "theme-ui"
import theme from "../settings/theme"

// Components
import Header from "./header"

interface IProps {
  children: any
}
const Layout: FunctionComponent<IProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ThemeLayout>
        <Main children={children} />
      </ThemeLayout>
    </ThemeProvider>
  )
}

export default Layout
