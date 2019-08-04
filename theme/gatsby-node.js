const UrlSafeString = require("url-safe-string"),
  slugify = new UrlSafeString()
const createPaginatedProducts = require("gatsby-paginate")
const fs = require("fs")
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.onPreBootstrap = async (
  { reporter, store, cache, actions },
  options
) => {
  const srcPath = "./src" // TODO: check that exists/ create one
  const contentPath = `${srcPath}/static-pages`
  const indexPage = `${contentPath}/index.mdx`
  const { createNode } = actions

  // Create a src/static-pages folder if there isn't one yet
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    if (!fs.existsSync(srcPath)) {
      fs.mkdirSync(srcPath)
    }
    fs.mkdirSync(contentPath)

    // If the indexPage doesn't exist yet,
    // let's create it using the /theme's static-pages/index.mdx content
    if (!fs.existsSync(indexPage)) {
      const initialIndexContent = require.resolve(indexPage)

      fs.readFile(initialIndexContent, "utf-8", (err, data) => {
        fs.writeFile(indexPage, data, err => {
          if (err) console.log(err)
          reporter.info(`creating the homepage`)
        })
      })
    }
  }

  // Create a node for the Logo image
  if (options.site && options.site.logoURL) {
    // TODO: Detect if the URL is actually an image or not.
    reporter.info("importing the site logo")
    let fileNode = null
    try {
      fileNode = await createRemoteFileNode({
        url: options.site.logoURL,
        parent: null,
        store,
        cache,
        createNode,
        createNodeId: () => "site-logo",
      })
    } catch (e) {
      reporter.warn(`The site logo couldn't be imported. - ${e}`)
    }
    if (fileNode) {
      reporter.info("succesfully imported the site logo")
    }
  }
}

exports.createPages = ({ graphql, actions, reporter }, options) => {
  const { createPage } = actions
  const productDetailPath =
    (options.productDetail && options.productDetail.slug) || "producto"
  const productsListingPath =
    (options.productsListing && options.productsListing.slug) || "productos"
  const enablePagination =
    (options.productsListing && options.productsListing.enablePagination) ||
    false
  const productsListingPerPage =
    (options.productsListing &&
      options.productsListing.productsListingPerPage) ||
    6

  return Promise.all([
    new Promise((resolve, reject) => {
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
                    original_price
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

            // Create Products' Detail Pages
            const products = result.data.allMercadoLibreProduct.edges
            reporter.info(
              `creating ${products.length} product pages with the path /${productDetailPath}:slug`
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

            // Products Listing
            reporter.info(
              `creating a products listing page located at /${productsListingPath}`
            )

            if (enablePagination) {
              // Generate the paginated products
              // and the product listing page
              createPaginatedProducts({
                edges: products,
                pageLength: productsListingPerPage,
                pageTemplate: require.resolve(
                  "./src/templates/productsListing.tsx"
                ),
                pathPrefix: productsListingPath,
                createPage: createPage,
                context: {
                  paginatedPagesExist: true,
                },
              })
            } else {
              // Generate just the products listing page
              createPage({
                path: productsListingPath,
                component: require.resolve(
                  "./src/templates/productsListing.tsx"
                ),
              })
            }
          })
          .catch(err => console.log("Error creating products listing ", err))
      )
    }),
    new Promise((resolve, reject) => {
      const staticPageTemplate = require.resolve(
        `./src/templates/staticPage.tsx`
      )

      resolve(
        graphql(
          `
            {
              allMdx {
                edges {
                  node {
                    frontmatter {
                      path
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
            reporter.info("creating MDX static pages...")
            const mdxPages = result.data.allMdx.edges
            mdxPages.forEach(({ node }) => {
              createPage({
                path: node.frontmatter.path,
                component: staticPageTemplate,
              })
            })
          })
          .catch(err => console.log("Error creating static pages ", err))
      )
    }),
  ])
}

exports.onCreateNode = ({ node, actions }, options) => {
  const { createNodeField } = actions
  const productDetailPath =
    (options.productDetail && options.productDetail.slug) || "producto"

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
