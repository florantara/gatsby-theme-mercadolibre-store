import React, { FunctionComponent, useRef, useState, useEffect } from "react"

// Types
import { IProduct } from "../types/product"

// Theme UI
/** @jsx jsx */
// @ts-ignore : jsx unused
import { jsx } from "theme-ui"

// Styled Components
import styled from "@emotion/styled"

const Image = styled.span`
  .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
  }
`
// Utils
import { getPrice } from "../utils/getPrice"

// Site config
import { siteConfig } from "../settings/site"

// Gatsby
import { Link } from "gatsby"
import Img from "gatsby-image"

interface IProps {
  product: IProduct
}

const ProductCard: FunctionComponent<IProps> = ({ product }) => {
  const titleElement = useRef<HTMLSpanElement>(null)
  const [title, setTitle] = useState(product.title)

  // Site Config
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

  const { isOnSale, price, originalPrice, percentageOff } = getPrice(
    product.price,
    product.original_price
  )

  return (
    <li sx={{ variant: "productCard.item" }}>
      <Link to={product.fields.slug}>
        <Image sx={{ variant: "productCard.image" }}>
          {productCard.showImageActionBox && (
            <span
              sx={{ variant: "productCard.imageActionBox" }}
              className="imageActionBox"
            >
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
                title={`Moneda: ${product.currency_id}`}
                aria-label={`Moneda: ${product.currency_id}`}
              >
                {isOnSale ? (
                  <span sx={{ variant: "productCard.price.onSaleInfo" }}>
                    <span sx={{ variant: "productCard.price.originalPrice" }}>
                      ${originalPrice}
                    </span>
                    <span>${price}</span>
                    <span sx={{ variant: "productCard.price.percentageOff" }}>
                      {percentageOff}% OFF
                    </span>
                  </span>
                ) : (
                  <span>${price}</span>
                )}
              </span>
            )}
          </span>
        )}
      </Link>
    </li>
  )
}

export default ProductCard
