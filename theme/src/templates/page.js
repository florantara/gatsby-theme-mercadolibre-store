import React from "react"
import Layout from "../components/layout"

const Page = ({ pageContext }) => {
  console.log("page data ", pageContext)
  return (
    <Layout>
      <h1>{pageContext.heading}</h1>
    </Layout>
  )
}
export default Page
