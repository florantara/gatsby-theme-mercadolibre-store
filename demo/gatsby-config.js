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
          enablePagination: true,
          productsListingPerPage: 3,
        },
        mercadoLibre: {
          siteID: "MCO",
          user: "MERCADEOWEBRELAX", //PICUADRADO_DESIGN
        },
      },
    },
  ],
}
