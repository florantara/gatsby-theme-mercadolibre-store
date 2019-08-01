/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "🌵Plants Store",
  },
  plugins: [
    {
      resolve: "@florantara/gatsby-theme-mercadolibre-store",
      options: {
        // Default initial data:
        mercadoLibre: {
          siteID: "MLA",
          user: "PICUADRADO_DESIGN",
        },
      },
    },
  ],
}
