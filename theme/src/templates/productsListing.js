import React from "react"
import Layout from "../components/layout"
import { useAllProducts } from "../data/allProducts"
import ProductCard from "../components/productCard"
import Grid from "@material-ui/core/Grid"
const ProductDetail = ({ pageContext }) => {
  const { allMercadoLibreProduct } = useAllProducts()
  const products = allMercadoLibreProduct.edges

  return (
    <Layout>
      <h1>Productos:</h1>

      <Grid container justify="center" spacing={5}>
        {products &&
          products.map(product => {
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
