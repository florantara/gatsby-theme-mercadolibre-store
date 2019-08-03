import React, { FunctionComponent } from "react"

// Types
import { IProductNode } from "../types/product"

// Theme UI
/** @jsx jsx */
// @ts-ignore : jsx unused
import { Styled, jsx, Layout } from "theme-ui"

// Styled
import { ProductsGrid } from "../styledComponents/productsGrid"

// Components
import ProductCard from "../components/productCard"

interface IProps {
  itemIDs: string[] // itemIDs
  name?: string
  title?: string
  subtitle?: string
}

// Data
import { useAllProducts } from "../data/allProducts"

/*
 * Usage:
 *
 * <FeaturedProducts
 *  title="Productos Destacados"
 *  subtitle="Promociones Agosto 2019"
 *  itemIDs='"MLA624237957","MLA649023363", "MLA782770773"'
 * />
 *
 *
 */

const FeaturedProducts: FunctionComponent<IProps> = ({
  itemIDs,
  name,
  title,
  subtitle,
}) => {
  // All products data
  const {
    allMercadoLibreProduct: { edges },
  } = useAllProducts()

  const featuredProducts: IProductNode[] = edges.filter((e: IProductNode) =>
    itemIDs.includes(e.node.itemID)
  )

  return (
    <Layout
      className="Layout--compact"
      sx={{ variant: `fragments.featuredProducts_${name}` }}
    >
      {title && <Styled.h2>{title}</Styled.h2>}
      {subtitle && <Styled.h3>{subtitle}</Styled.h3>}
      <ProductsGrid>
        {featuredProducts &&
          featuredProducts.map((product: IProductNode) => {
            return <ProductCard product={product.node} key={product.node.id} />
          })}
      </ProductsGrid>
    </Layout>
  )
}

export default FeaturedProducts
