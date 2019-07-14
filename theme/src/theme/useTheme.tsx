import { useStaticQuery, graphql } from "gatsby"

export const useTheme = () => {
  const siteTheme = useStaticQuery(
    graphql`
      query styles {
        siteTheme {
          theme {
            productDetail {
              cardWidth
              imageHeight
            }
            materialUI {
              palette {
                primary {
                  main
                }
              }
            }
          }
        }
      }
    `
  )
  return siteTheme
}
