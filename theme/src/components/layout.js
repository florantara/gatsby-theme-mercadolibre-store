import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Layout = ({ children }) => {
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
    <div>
      <header>
        <span>{data.site.siteMetadata.title}</span>
      </header>
      <main>
        <div>{children}</div>
      </main>
    </div>
  )
}

export default Layout
