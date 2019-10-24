import React, { FunctionComponent } from "react"
import { Helmet } from "react-helmet"

// Types
import { IProduct, IProductQuery } from "../types/product"

// Theme UI
/** @jsx jsx */
// @ts-ignore : jsx unused
import { Styled, jsx, Layout } from "theme-ui"

// Gatsby
import { graphql } from "gatsby"
import Img from "gatsby-image"

// Components
import Site from "../components/site"
import { ButtonBuy } from "../components/buttonBuy"

// Gallery
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

// Utils
import { getPrice } from "../utils/getPrice"

// Icons
import { FiChevronLeft, FiShare } from "react-icons/fi"

// Site config
import { siteConfig } from "../settings/site"

interface IProps {
  data: IProductQuery
}
const ProductDetail: FunctionComponent<IProps> = ({ data }) => {
  const product: IProduct = data.mercadoLibreProduct

  // Site Config
  const { productDetail } = siteConfig

  const galleryImages = product.itemImages.map(img => ({
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
    <Site>
      <Helmet>
        <title>{product.title}</title>
        <meta name="description" content={product.itemDescription} />
      </Helmet>
      <Layout className="Layout--compact">
        <a
          sx={{
            variant: "buttons.transparent",
            fontSize: "15px",
            color: "brand_02.0",
            paddingTop: "30px",
          }}
          onClick={() => typeof window !== "undefined" && window.history.back()}
          aria-label="Volver"
        >
          <FiChevronLeft /> volver
        </a>
        <article sx={{ variant: "productDetail.container" }}>
          {productDetail.showShareIcon && (
            <a
              sx={{ variant: "productDetail.shareIcon" }}
              href={typeof window !== "undefined" ? window.location.href : ""} // TODO: copy to clipboard
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compartir"
              title="Compartir"
            >
              <FiShare />
            </a>
          )}

          <section sx={{ variant: "productDetail.title" }}>
            <Styled.h1>{product.title}</Styled.h1>
          </section>

          <section sx={{ variant: "productDetail.gallery" }}>
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

          {(productDetail.showCategory ||
            productDetail.showPrice ||
            productDetail.showMercadoLibreButton ||
            productDetail.showAttributes) && (
            <section sx={{ variant: "productDetail.meta" }}>
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
                      <span
                        sx={{ variant: "productDetail.price.originalPrice" }}
                      >
                        ${originalPrice}
                      </span>
                      <span>${price}</span>
                      <span
                        sx={{ variant: "productDetail.price.percentageOff" }}
                      >
                        {percentageOff}% OFF
                      </span>
                    </span>
                  ) : (
                    <span>${price}</span>
                  )}
                </span>
              )}

              <ButtonBuy
                permalink={product.permalink}
                showMercadoLibreButton={productDetail.showMercadoLibreButton}
                product={product}
              />

              {productDetail.showAttributes &&
                product.attributes &&
                product.attributes.length > 0 && (
                  <Styled.ul>
                    {product.attributes.map(a => {
                      if (a.value_name && a.value_name !== "") {
                        return (
                          <Styled.li>
                            <strong>{a.name}: </strong>
                            {a.value_name}
                          </Styled.li>
                        )
                      }
                    })}
                  </Styled.ul>
                )}
            </section>
          )}

          {productDetail.showDescription && (
            <section sx={{ variant: "productDetail.description" }}>
              {product.itemDescription && (
                <div>
                  <Styled.h2>Descripción</Styled.h2>
                  <Styled.p>{product.itemDescription}</Styled.p>
                </div>
              )}
            </section>
          )}
        </article>
      </Layout>
    </Site>
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
      attributes {
        name
        value_name
      }
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
