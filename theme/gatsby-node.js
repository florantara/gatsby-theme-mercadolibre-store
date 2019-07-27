const crypto = require("crypto")
const UrlSafeString = require("url-safe-string"),
  slugify = new UrlSafeString()
const createPaginatedProducts = require("gatsby-paginate")

exports.onPreBootstrap = ({ actions }, options) => {
  const { createNode } = actions
  const theme = options.theme || {}

  // We create a node with the Theme data
  // so it can be reused in components
  // throught useTheme hook from theme/useHook
  // createNode({
  //   theme,
  //   id: `gatsby-theme-styles`,
  //   parent: null,
  //   children: [],
  //   internal: {
  //     type: `SiteTheme`,
  //     content: JSON.stringify(theme),
  //     description: `Gatsby Theme Styles"`,
  //     contentDigest: crypto
  //       .createHash(`md5`)
  //       .update(JSON.stringify(theme))
  //       .digest(`hex`),
  //   },
  // })
}

exports.createPages = ({ graphql, actions, reporter }, options) => {
  const { createPage } = actions
  const productDetailPath = options.paths.productDetail || "producto"
  const productsListingPath = options.paths.productsListing || "productos"
  const productsListingPerPage = options.paths.productsListingPerPage || 6

  return new Promise((resolve, reject) => {
    const productDetailTemplate = require.resolve(
      `./src/templates/productDetail.tsx`
    )
    resolve(
      graphql(
        `
          {
            allMercadoLibreProduct {
              edges {
                node {
                  id
                  title
                  fields {
                    slug
                  }
                  itemCategory {
                    category_name
                    category_id
                  }
                  price
                  currency_id
                  itemThumbnail {
                    image {
                      childImageSharp {
                        fluid(maxWidth: 800) {
                          base64
                          aspectRatio
                          src
                          srcSet
                          srcWebp
                          srcSetWebp
                          sizes
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
        .then(result => {
          if (result.errors) {
            reject(result.errors)
          }
          //reporter.info("creating product pages")
          const products = result.data.allMercadoLibreProduct.edges
          reporter.info(
            `creating ${
              products.length
            } product pages with the path /${productDetailPath}:slug`
          )
          products.forEach(({ node }) => {
            const slug = slugify.generate(node.title)
            const path = `/${productDetailPath}/${slug}`
            createPage({
              path,
              component: productDetailTemplate,
              context: {
                id: node.id,
              },
            })
          })

          // Create a Homepage
          createPage({
            path: "/",
            component: require.resolve("./src/templates/page.js"),
            context: {
              heading: "Homepage",
            },
          })

          // Products Listing
          reporter.info(
            `creating a products listing page located at /${productsListingPath}`
          )

          createPaginatedProducts({
            edges: products,
            pageLength: productsListingPerPage,
            pageTemplate: require.resolve(
              "./src/templates/productsListing.tsx"
            ),
            pathPrefix: productsListingPath,
            createPage: createPage,
          })
        })
        .catch(err => console.log("Error creating products listing ", err))
    )
  })
}

exports.onCreateNode = ({ node, actions }, options) => {
  const { createNodeField } = actions
  const productDetailPath = options.paths.productDetail || "producto"

  if (node.internal.type === `MercadoLibreProduct`) {
    const slug = slugify.generate(node.title)
    const path = `/${productDetailPath}/${slug}`
    createNodeField({
      node,
      name: `slug`,
      value: path,
    })
  }
}
