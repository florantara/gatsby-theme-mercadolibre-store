import React, { FunctionComponent } from "react"

// Types
import { IProduct, IProductQuery } from "../types/product"

// Theme UI
/** @jsx jsx */
import { Styled, jsx } from "theme-ui"

// Gatsby
import { graphql } from "gatsby"
import Img from "gatsby-image"

// Components
import Layout from "../components/layout"

interface IProps {
  data: IProductQuery
}
const ProductDetail: FunctionComponent<IProps> = ({ data }) => {
  const product: IProduct = data.mercadoLibreProduct
  console.log("product ", product)
  return (
    <Layout>
      <Styled.h1>{product.title}</Styled.h1>
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
      currency_id
      price
      original_price
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
