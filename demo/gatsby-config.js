/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Guau Yeah Petstore",
  },
  plugins: [
    {
      resolve: "gatsby-theme-mercadolibre-store",
      options: {
        site: {
          logoURL:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/575957/Logo-800x800.png",
        },

        productDetail: {
          slug: "producto",
        },
        productsListing: {
          slug: "productos",
          enablePagination: true,
          productsListingPerPage: 3,
        },

        mercadoLibre: {
          siteID: "MLA",
          user: "guau+yeah", //PICUADRADO_DESIGN
        },
      },
    },
  ],
}
