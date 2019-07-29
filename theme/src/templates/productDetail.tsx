import React, { FunctionComponent } from "react"

// Types
import { IProduct, IProductQuery } from "../types/product"

// Theme UI
/** @jsx jsx */
import { Styled, jsx } from "theme-ui"

// Gatsby
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

// Components
import Layout from "../components/layout"

// Gallery
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

// Utils
import { getPrice } from "../utils/getPrice"

// Icons
import { FiExternalLink, FiChevronLeft } from "react-icons/fi"

// Site config
import siteConfig from "../settings/site"

interface IProps {
  data: IProductQuery
}
const ProductDetail: FunctionComponent<IProps> = ({ data }, props) => {
  console.log("Props ", props)
  const product: IProduct = data.mercadoLibreProduct

  // Site Config
  const { productDetail } = siteConfig

  const galleryImages = product.itemImages.map((img, i) => ({
    thumbnail: img.image.childImageSharp.fixed.src,
    renderItem: () => (
      <Img
        fluid={{
          ...img.image.childImageSharp.fluid,
        }}
        imgStyle={{
          objectFit: "contain",
        }}
        alt={product.title}
      />
    ),
  }))

  const { isOnSale, price, originalPrice, percentageOff } = getPrice(
    product.price,
    product.original_price
  )

  return (
    <Layout>
      <a
        sx={{
          variant: "buttons.transparent",
          fontSize: 15,
        }}
        onClick={() => window.history.back()}
        aria-label="Volver"
      >
        <FiChevronLeft /> volver
      </a>
      <article
        sx={{
          variant: "productDetail.container",
        }}
      >
        <section
          sx={{
            variant: "productDetail.title",
          }}
        >
          <Styled.h1>{product.title}</Styled.h1>
        </section>
        <section
          sx={{
            variant: "productDetail.gallery",
          }}
        >
          <ImageGallery
            items={galleryImages}
            thumbnailPosition="bottom"
            showNav={false}
            showFullscreenButton={false}
            infinite={false}
            showPlayButton={false}
            lazyLoad={true}
            showIndex={true}
          />
        </section>
        <section
          sx={{
            variant: "productDetail.meta",
          }}
        >
          {productDetail.showCategory && (
            <span
              sx={{
                variant: "productDetail.category",
              }}
            >
              {product.itemCategory.category_name}
            </span>
          )}

          {productDetail.showPrice && (
            <span
              sx={{ variant: "productDetail.price" }}
              title={`Moneda: ${product.currency_id}`}
              aria-label={`Moneda: ${product.currency_id}`}
            >
              {isOnSale ? (
                <span sx={{ variant: "productDetail.price.onSaleInfo" }}>
                  <span sx={{ variant: "productDetail.price.originalPrice" }}>
                    ${originalPrice}
                  </span>
                  <span>${price}</span>
                  <span sx={{ variant: "productDetail.price.percentageOff" }}>
                    {percentageOff}% OFF
                  </span>
                </span>
              ) : (
                <span>${price}</span>
              )}
            </span>
          )}

          <a
            className="buyButton"
            sx={{
              variant: "buttons.primary",
            }}
            href={product.permalink}
            target="_blank"
          >
            Comprar en <strong>MercadoLibre</strong>
            <FiExternalLink />
          </a>
        </section>

        <section
          sx={{
            variant: "productDetail.description",
          }}
        >
          {product.itemDescription && (
            <div>
              <Styled.h2>Descripción</Styled.h2>
              <Styled.p>{product.itemDescription}</Styled.p>
            </div>
          )}
        </section>
      </article>
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
      itemCategory {
        category_name
      }
      accepts_mercadopago
      available_quantity
      itemImages {
        image {
          childImageSharp {
            fixed: fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
            fluid: fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
