import React from "react"
import Layout from "../components/layout"

const PageTemplate = ({ pageContext }) => (
  <Layout>
    <h1>{pageContext.heading}</h1>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
)

export default PageTemplate
