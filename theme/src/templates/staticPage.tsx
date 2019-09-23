import React, { FunctionComponent } from "react"
import { Helmet } from "react-helmet"

// Gatsby
import { graphql } from "gatsby"

// MDX
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

// Theme UI
/** @jsx jsx */
// @ts-ignore : jsx unused
import { jsx, Layout, Container } from "theme-ui"

// Components
import Site from "../components/site"

// Fragments
// These are blocks that can be reused
import { fragments } from "../fragments"

// Data
import { useMeta } from "../data/siteMeta"

interface IProps {
  data: {
    mdx: {
      body: any
      frontmatter: {
        title: string
        bodyClass?: string
      }
    }
  }
}

const StaticPage: FunctionComponent<IProps> = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx
  const { site } = useMeta()
  console.log("frontmatter", frontmatter)
  return (
    <Site bodyClass={frontmatter.bodyClass}>
      <Helmet>
        <title>{`${frontmatter.title} - ${site.siteMetadata.title}`}</title>
        <meta
          name="description"
          content={`${frontmatter.title} - ${site.siteMetadata.meta}`}
        />
      </Helmet>
      <MDXProvider components={{ ...fragments, Layout, Container }}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </Site>
  )
}

export const staticPageQuery = graphql`
  query {
    mdx {
      body
      frontmatter {
        title
        bodyClass
      }
    }
  }
`

export default StaticPage
