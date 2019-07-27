import React, { FunctionComponent } from "react"

// Material UI
import { Header as ThemeHeader, Styled } from "theme-ui"

// Gatsby
import { graphql, useStaticQuery, Link } from "gatsby"

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
  return (
    <ThemeHeader>
      <Styled.h2>{data.site.siteMetadata.title}</Styled.h2>
      <Styled.a as={Link} to="/productos">
        Productos
      </Styled.a>
    </ThemeHeader>
  )
}

export default Header
