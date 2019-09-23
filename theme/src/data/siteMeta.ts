import { useStaticQuery, graphql } from "gatsby"

export const useMeta = () => {
  const meta = useStaticQuery(
    graphql`
      query Meta {
        site {
          siteMetadata {
            title
            meta
            language
          }
        }
      }
    `
  )
  return meta
}
