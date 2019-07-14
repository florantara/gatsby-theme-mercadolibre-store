import React, { FunctionComponent } from "react"

// Material UI
import Grid from "@material-ui/core/Grid"

// Gatsby
import { graphql, useStaticQuery } from "gatsby"

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
    <header>
      <Grid container={true} spacing={3}>
        <Grid item={true} xs={12}>
          <h2>{data.site.siteMetadata.title}</h2>
        </Grid>
      </Grid>
    </header>
  )
}

export default Header
