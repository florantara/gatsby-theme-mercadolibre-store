module.exports = ({ site = {}, mercadoLibre = {}, paths = {} }) => ({
  siteMetadata: {
    title: site.title || "Mercado Libre Store",
  },

  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-theme-ui`,
    {
      resolve: "gatsby-source-mercadolibre", // source plugin
      options: {
        username: mercadoLibre.user || "",
        site_id: mercadoLibre.siteID || "",
      },
    },
  ],
})
