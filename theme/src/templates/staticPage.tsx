import React, { FunctionComponent } from "react"

// Gatsby
import { graphql } from "gatsby"

// MDX
import { MDXRenderer } from "gatsby-plugin-mdx"

// Theme UI
/** @jsx jsx */
import { Styled, jsx } from "theme-ui"

// Components
import Layout from "../components/layout"

interface IProps {
  data: {
    mdx: {
      body: any
      frontmatter: {
        class?: string
        title: string
      }
    }
  }
}

const StaticPage: FunctionComponent<IProps> = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx
  return (
    <Layout>
      <article
        sx={{ variant: "staticPageContainer" }}
        className={frontmatter.class}
      >
        <Styled.h1>{frontmatter.title}</Styled.h1>

        <MDXRenderer children={body} />
      </article>
    </Layout>
  )
}

export const staticPageQuery = graphql`
  query {
    mdx {
      body
      frontmatter {
        class
        title
      }
    }
  }
`

export default StaticPage
