import { useStaticQuery, graphql } from "gatsby"

export const useAllFilters = () => {
  const allFilters = useStaticQuery(
    graphql`
      query Filters {
        allMercadoLibreFilters {
          nodes {
            filters {
              name
              id
              values {
                name
                id
                children_categories {
                  id
                  name
                }
              }
            }
          }
        }
      }
    `
  )
  return allFilters
}
