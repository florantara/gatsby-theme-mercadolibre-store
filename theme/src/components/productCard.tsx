import React, { FunctionComponent } from "react"

// Types
import { IProduct } from "../types/product"

// Theme UI
/** @jsx jsx */
import { jsx } from "theme-ui"

// Styled Components
import styled from "@emotion/styled"

const Card = styled(Link)`
  text-decoration: none;
`
const Image = styled.span`
  .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
  }
`
// Gatsby
import { Link } from "gatsby"
import Img from "gatsby-image"

interface IProps {
  product: IProduct
}

const ProductCard: FunctionComponent<IProps> = ({ product }) => {
  return (
    <article sx={{ variant: "productCard.item" }}>
      <Card to={product.fields.slug}>
        <Image sx={{ variant: "productCard.image" }}>
          <Img
            fluid={{
              ...product.itemThumbnail.image.childImageSharp.fluid,
            }}
            imgStyle={{
              objectFit: "contain",
            }}
            alt={product.title}
          />
        </Image>
        <span sx={{ variant: "productCard.meta" }}>
          <span sx={{ variant: "productCard.title" }}>{product.title}</span>
          <small sx={{ variant: "productCard.price" }}>
            {product.currency_id}
            {product.price}
          </small>
        </span>
      </Card>
    </article>
  )
}

export default ProductCard
