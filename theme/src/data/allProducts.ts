import { useStaticQuery, graphql } from "gatsby"

export const useAllProducts = () => {
  const allProducts = useStaticQuery(
    graphql`
      query Products {
        allMercadoLibreProduct {
          edges {
            node {
              id
              itemID
              title
              fields {
                slug
              }
              itemCategory {
                category_name
                category_id
              }
              price
              original_price
              currency_id
              itemThumbnail {
                image {
                  childImageSharp {
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return allProducts
}
