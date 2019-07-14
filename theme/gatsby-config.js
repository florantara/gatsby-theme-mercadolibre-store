module.exports = ({ site = {}, mercadoLibre = {}, paths = {} }) => ({
  siteMetadata: {
    title: site.title || "Mercado Libre Store",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-mercadolibre",
      options: {
        username: mercadoLibre.user || "",
        site_id: mercadoLibre.siteID || "",
      },
    },
  ],
})
