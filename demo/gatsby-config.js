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
          title: "Tienda Picuadrado Design",
        },
        paths: {
          productDetail: "planta",
          productsListing: "cosas",
        },
        mercadoLibre: {
          siteID: "MLA",
          user: "PICUADRADO_DESIGN",
        },
      },
    },
  ],
}
