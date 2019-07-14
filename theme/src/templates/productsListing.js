import React from "react"
import Layout from "../components/layout"
import { useAllProducts } from "../data/allProducts"

const ProductDetail = ({ pageContext }) => {
  const { allMercadoLibreProduct } = useAllProducts()
  const products = allMercadoLibreProduct.edges

  return (
    <Layout>
      <h1>{pageContext.id}</h1>
      <ul>
        {products &&
          products.map(product => {
            return (
              <li>
                <a key={product.node.id} href={product.node.fields.slug}>
                  {product.node.title}
                </a>
              </li>
            )
          })}
      </ul>
    </Layout>
  )
}
export default ProductDetail
