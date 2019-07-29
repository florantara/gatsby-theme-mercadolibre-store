const path = require("path")
module.exports = ({ site = {}, mercadoLibre = {}, paths = {} }) => ({
  siteMetadata: {
    title: site.title || "Mercado Libre Store",
  },

  plugins: [
    {
      resolve: "gatsby-source-mercadolibre", // source plugin
      options: {
        username: mercadoLibre.user || "",
        site_id: mercadoLibre.siteID || "",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static-pages`,
        path: path.resolve("src/static-pages"),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-theme-ui`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-mdx`,
  ],
})
