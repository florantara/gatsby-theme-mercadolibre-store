/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-mercadolibre-store",
      options: {
        site: {
          title: "Guau Yeah Petstore",
        },
        paths: {
          productDetail: "producto",
          productsListing: "productos",
          productsListingPerPage: 6,
        },
        mercadoLibre: {
          siteID: "MLA",
          user: "guau+yeah", //PICUADRADO_DESIGN
        },
      },
    },
  ],
}
