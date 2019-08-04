import React, { FunctionComponent, useState } from "react"
import { Helmet } from "react-helmet"

// Types
import { IPathContext } from "../types/theme"

// Theme UI
/** @jsx jsx */
// @ts-ignore : jsx unused
import { Styled, jsx, Flex, Box, Layout } from "theme-ui"

// Types
import { IProductNode } from "../types/product"

// Components
import Site from "../components/site"
import ProductCard from "../components/productCard"
import Pagination from "../components/pagination"

// Styled
import { ProductsGrid } from "../styledComponents/productsGrid"

// Site config
import { siteConfig } from "../settings/site"

// Data
import { useAllProducts } from "../data/allProducts"
import { useMeta } from "../data/siteMeta"

interface IProps {
  pathContext: IPathContext
}

/*
 * Pagination formats supported:
 * "pages" or "loadMore"
 * "loadMore" is the default
 */
const ProductsListing: FunctionComponent<IProps> = ({ pathContext }) => {
  const { site } = useMeta()

  const group = pathContext && pathContext.group
  const first = pathContext && pathContext.first
  const index = pathContext && pathContext.index
  const pageCount = pathContext && pathContext.pageCount

  // We use this to check that gatsby-paginate ran
  // and there are pages to work with.
  //
  // If so, and paginationType is set to "pages" on
  // the siteConfig, we'll display a pagination.
  // If it's set to "pages", but no pages were created
  // we'll fallback to the "loadMore" format
  const paginatedPagesExist = pathContext.paginatedPagesExist

  // All products data
  const {
    allMercadoLibreProduct: { edges },
  } = useAllProducts()

  const totalProducts = edges.length

  // Site Config
  const {
    productsListing: {
      pageTitle,
      paginationType,
      loadMoreButtonLabel,
      loadMoreNoMoreText,
      loadMoreAmount,
    },
  } = siteConfig

  // how many products to show by page/loadMore screen
  const groupedBy =
    paginationType === "pages" && paginatedPagesExist && group
      ? group.length
      : loadMoreAmount

  const initialDisplayedProducts =
    paginationType === "pages" && paginatedPagesExist
      ? group
      : edges.filter((_: IProductNode, i: number) => i < groupedBy) // Limit the amount

  const [products, setProducts] = useState(initialDisplayedProducts)

  // Load More Products
  const loadMoreHandler = () => {
    const displaying = products.length
    const amountToLoad = displaying + groupedBy
    const updatedProducts = edges.filter(
      (_: IProductNode, i: number) => i < amountToLoad
    )
    setProducts(updatedProducts)
  }

  return (
    <Site>
      <Helmet>
        <title>{`${pageTitle} - ${site.siteMetadata.title}`}</title>
        <meta
          name="description"
          content={`${pageTitle} - ${site.siteMetadata.meta}`}
        />
      </Helmet>
      <Layout className="Layout--compact">
        <Flex sx={{ alignItems: "center" }}>
          <Box sx={{ variant: "productsListing.header.title" }}>
            <Styled.h1>{pageTitle}</Styled.h1>
          </Box>
          {paginationType === "pages" && paginatedPagesExist && !first && (
            <Box
              sx={{
                variant: "productsListing.header.paginationContext",
              }}
            >
              página {index} de {pageCount}
            </Box>
          )}
        </Flex>

        <ProductsGrid>
          {products &&
            products.map((product: IProductNode) => {
              return (
                <ProductCard product={product.node} key={product.node.id} />
              )
            })}
        </ProductsGrid>

        {paginationType === "pages" && paginatedPagesExist ? (
          <Pagination context={pathContext} />
        ) : (
          <aside sx={{ variant: "pagination.loadMoreButtonWrapper" }}>
            {products.length !== totalProducts ? (
              <button
                sx={{ variant: "buttons.secondaryOutline" }}
                onClick={loadMoreHandler}
              >
                {loadMoreButtonLabel}
              </button>
            ) : (
              <Styled.p>{loadMoreNoMoreText}</Styled.p>
            )}
          </aside>
        )}
      </Layout>
    </Site>
  )
}
export default ProductsListing
