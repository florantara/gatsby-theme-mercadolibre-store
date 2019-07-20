import React, { FunctionComponent } from "react"

// Types
import { IProductsQuery } from "../types/product"

// Theme
/** @jsx jsx */
import { Styled, Box, jsx } from "theme-ui"

// Components
import Layout from "../components/layout"
import ProductCard from "../components/productCard"

// Styled
import { Grid } from "../styledComponents/grid"

// Data
import { useAllProducts } from "../data/allProducts"

const ProductsListing: FunctionComponent = () => {
  const { allMercadoLibreProduct } = useAllProducts()
  const products: IProductsQuery = allMercadoLibreProduct

  return (
    <Layout>
      <Styled.h1>Productos:</Styled.h1>

      <Grid>
        {products &&
          products.edges.map(product => {
            return <ProductCard product={product.node} key={product.node.id} />
          })}
      </Grid>
    </Layout>
  )
}
export default ProductsListing
