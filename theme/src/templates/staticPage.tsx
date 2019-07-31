import React, { FunctionComponent } from "react"
import { Helmet } from "react-helmet"

// Gatsby
import { graphql } from "gatsby"

// MDX
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

// Theme UI
/** @jsx jsx */
import { jsx, Layout } from "theme-ui"

// Components
import Site from "../components/site"

// Fragments
// These are blocks that can be reused
import { fragments } from "../fragments"

interface IProps {
  data: {
    mdx: {
      body: any
      frontmatter: {
        title: string
      }
    }
  }
}

const StaticPage: FunctionComponent<IProps> = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx

  return (
    <Site>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <MDXProvider components={{ ...fragments, Layout }}>
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
      }
    }
  }
`

export default StaticPage
