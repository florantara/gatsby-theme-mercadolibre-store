import { useStaticQuery, graphql } from "gatsby"

export const useAllProducts = () => {
  const allProducts = useStaticQuery(
    graphql`
      query Products {
        allMercadoLibreProduct {
          edges {
            node {
              id
              title
              fields {
                slug
              }
              domain_id
              price
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
