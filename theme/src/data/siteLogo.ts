import { useStaticQuery, graphql } from "gatsby"

export const useLogo = () => {
  const siteLogo = useStaticQuery(
    graphql`
      query Logo {
        logoLarge: file(id: { eq: "site-logo" }) {
          id
          childImageSharp {
            fixed: fixed(width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        logoMedium: file(id: { eq: "site-logo" }) {
          id
          childImageSharp {
            fixed: fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        logoSmall: file(id: { eq: "site-logo" }) {
          id
          childImageSharp {
            fixed: fixed(width: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        logoTiny: file(id: { eq: "site-logo" }) {
          id
          childImageSharp {
            fixed: fixed(width: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return siteLogo
}
