import React, { FunctionComponent } from "react"

// Theme UI
/** @jsx jsx */
import { Header as ThemeHeader, Styled, jsx } from "theme-ui"

// Gatsby
import { graphql, useStaticQuery, Link } from "gatsby"

// Site config
import siteConfig from "../settings/site"

const Header: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // Site Config
  const { header } = siteConfig

  return (
    <ThemeHeader>
      <h1 sx={{ variant: "siteHeader.textLogo" }}>
        {data.site.siteMetadata.title}
      </h1>
      {header.menuItems && (
        <nav sx={{ variant: "siteHeader.navigation" }} role="navigation">
          <ul>
            {header.menuItems.map((m, i) => (
              <li key={i}>
                <Link to={m.link}>{m.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </ThemeHeader>
  )
}

export default Header
