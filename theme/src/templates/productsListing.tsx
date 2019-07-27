import React, { FunctionComponent, useState } from "react"

// Theme UI
/** @jsx jsx */
import { Styled, jsx } from "theme-ui"

// Types
import { IProductNode } from "../types/product"

// Components
import Layout from "../components/layout"
import ProductCard from "../components/productCard"
import Pagination from "../components/pagination"

// Styled
import { Grid } from "../styledComponents/grid"

// Site config
import siteConfig from "../settings/site"

// Data
import { useAllProducts } from "../data/allProducts"

interface IProps {
  pathContext: any
}
const ProductsListing: FunctionComponent<IProps> = ({ pathContext }) => {
  const { group } = pathContext // Paginated pages from GraphQL

  // All products
  const {
    allMercadoLibreProduct: { edges },
  } = useAllProducts()
  const {
    productsListing: { loadMoreButtonLabel, paginationType, pageTitle },
  } = siteConfig

  const displayProducts =
    paginationType === "pages"
      ? group
      : edges.filter((p: IProductNode, i: number) => i < group.length) // Limit the initial displayed amount

  const [products, setProducts] = useState(displayProducts)

  const loadMore = () => {
    const displaying = products.length
    const amountToLoad = displaying + group.length
    const updatedProducts = edges.filter(
      (p: IProductNode, i: number) => i < amountToLoad
    )
    setProducts(updatedProducts)
  }

  return (
    <Layout>
      <Styled.h1>{pageTitle}</Styled.h1>
      <Grid>
        {products &&
          products.map((product: IProductNode) => {
            return <ProductCard product={product.node} key={product.node.id} />
          })}
      </Grid>
      {paginationType === "pages" ? (
        <Pagination context={pathContext} />
      ) : (
        <div sx={{ variant: "pagination.loadMoreButtonWrapper" }}>
          <button
            sx={{ variant: "pagination.loadMoreButton" }}
            onClick={loadMore}
          >
            {loadMoreButtonLabel}
          </button>
        </div>
      )}
    </Layout>
  )
}
export default ProductsListing
