import React from "react"

// Gatsby
import { graphql } from "gatsby"
import Img from "gatsby-image"

// Components
import Layout from "../components/layout"

const ProductDetail = ({ data }) => {
  const product = data.mercadoLibreProduct
  return (
    <Layout>
      <h1>{product.title}</h1>
      {product.itemImages.map((img, i) => (
        <Img
          key={i}
          fluid={img.image.childImageSharp.fluid}
          alt={product.title}
        />
      ))}
    </Layout>
  )
}
export default ProductDetail

export const productQuery = graphql`
  query Product($id: String!) {
    mercadoLibreProduct(id: { eq: $id }) {
      id
      title
      price
      video_id
      permalink
      itemDescription
      accepts_mercadopago
      available_quantity
      itemImages {
        image {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
