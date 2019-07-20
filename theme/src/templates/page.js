import React from "react"

// Theme UI
import { Styled } from "theme-ui"

// Components
import Layout from "../components/layout"

const Page = ({ pageContext }) => {
  console.log("page data ", pageContext)
  return (
    <Layout>
      <Styled.h1>{pageContext.heading}</Styled.h1>
    </Layout>
  )
}
export default Page
