import React, { FunctionComponent } from "react"

// Types
import { IProductsQuery } from "../types/product"

// Components
import Layout from "../components/layout"
import ProductCard from "../components/productCard"

// Data
import { useAllProducts } from "../data/allProducts"

// Material UI
import Grid from "@material-ui/core/Grid"

const ProductDetail: FunctionComponent = () => {
  const { allMercadoLibreProduct } = useAllProducts()
  const products: IProductsQuery = allMercadoLibreProduct

  return (
    <Layout>
      <h1>Productos:</h1>

      <Grid container justify="center" spacing={5}>
        {products &&
          products.edges.map(product => {
            return (
              <Grid key={product.node.id} item>
                <ProductCard product={product.node} />
              </Grid>
            )
          })}
      </Grid>
    </Layout>
  )
}
export default ProductDetail
