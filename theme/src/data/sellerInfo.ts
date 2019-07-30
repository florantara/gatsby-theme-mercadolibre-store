import { useStaticQuery, graphql } from "gatsby"

export const useSeller = () => {
  const seller = useStaticQuery(
    graphql`
      query Seller {
        mercadoLibreSeller {
          seller {
            permalink
            tags
          }
        }
      }
    `
  )
  return seller
}
