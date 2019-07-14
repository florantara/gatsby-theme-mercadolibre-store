import React, { FunctionComponent } from "react"

// Material UI
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/styles"
import Container from "@material-ui/core/Container"

// Data
import materialUIBase from "../theme/materialUIBase"
import { useTheme } from "../theme/useTheme"
import { createMuiTheme } from "@material-ui/core/styles"

// Components
import Header from "./header"

interface IProps {
  children: any
}
const Layout: FunctionComponent<IProps> = ({ children }) => {
  const {
    siteTheme: { theme },
  } = useTheme()
  return (
    <>
      <CssBaseline />
      <ThemeProvider
        theme={{
          ...materialUIBase,
          ...createMuiTheme({ ...theme.materialUI }), // site's customizations
        }}
      >
        <Container>
          <Header />

          <main>
            <div>{children}</div>
          </main>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default Layout
