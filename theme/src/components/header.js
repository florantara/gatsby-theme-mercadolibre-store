import React from "react"
import Grid from "@material-ui/core/Grid"
import { graphql, useStaticQuery } from "gatsby"

export default function Header() {
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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h2>{data.site.siteMetadata.title}</h2>
        </Grid>
      </Grid>
    </header>
  )
}
