import React, { FunctionComponent, useRef, useState, useEffect } from "react"

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

// Site config
import siteConfig from "../settings/site"

// Gatsby
import { Link } from "gatsby"
import Img from "gatsby-image"

interface IProps {
  product: IProduct
}

const ProductCard: FunctionComponent<IProps> = ({ product }) => {
  const titleElement = useRef<HTMLSpanElement>(null)
  const [title, setTitle] = useState(product.title)
  const {
    productsListing: { productCard },
  } = siteConfig

  // Truncate long titles
  useEffect(() => {
    if (
      titleElement &&
      titleElement.current &&
      titleElement.current.offsetHeight < titleElement.current.scrollHeight
    ) {
      setTitle(title.replace(/\W*\s(\S)*$/, "..."))
    }
  }, [titleElement])

  return (
    <article sx={{ variant: "productCard.item" }}>
      <Card to={product.fields.slug}>
        <Image sx={{ variant: "productCard.image" }}>
          {productCard.showActionBox && (
            <span sx={{ variant: "productCard.actionBox" }}>
              <span>Ver producto</span>
            </span>
          )}
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
        {(productCard.showCategory ||
          productCard.showTitle ||
          productCard.showPrice) && (
          <span sx={{ variant: "productCard.meta" }}>
            {productCard.showCategory && (
              <span sx={{ variant: "productCard.category" }}>
                {product.itemCategory.category_name}
              </span>
            )}
            {productCard.showTitle && (
              <span sx={{ variant: "productCard.title" }} ref={titleElement}>
                {title}
              </span>
            )}
            {productCard.showPrice && (
              <span
                sx={{ variant: "productCard.price" }}
                title={`Currency: ${product.currency_id}`}
                aria-label={`Currency: ${product.currency_id}`}
              >
                ${product.price}
              </span>
            )}
          </span>
        )}
      </Card>
    </article>
  )
}

export default ProductCard
