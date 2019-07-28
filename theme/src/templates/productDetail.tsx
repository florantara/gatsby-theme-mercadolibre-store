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

// Gallery
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

interface IProps {
  data: IProductQuery
}
const ProductDetail: FunctionComponent<IProps> = ({ data }) => {
  const product: IProduct = data.mercadoLibreProduct
  console.log("product ", product.itemImages)

  const galleryImages = product.itemImages.map((img, i) => ({
    original: img.image.childImageSharp.fixed.src,
    thumbnail: img.image.childImageSharp.fixed.src,
    renderItem: () => (
      <Img
        key={i}
        fluid={img.image.childImageSharp.fluid}
        alt={product.title}
      />
    ),
  }))
  return (
    <Layout>
      <Styled.h1>{product.title}</Styled.h1>
      <ImageGallery
        items={galleryImages}
        thumbnailPosition="left"
        showFullscreenButton={false}
        infinite={false}
        showPlayButton={false}
        lazyLoad={true}
        showIndex={true}
      />
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
            fixed: fixed(width: 400) {
              ...GatsbyImageSharpFixed
            }
            fluid: fluid(maxWidth: 400, maxHeight: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
