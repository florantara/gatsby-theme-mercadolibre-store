const path = require("path")

module.exports = ({ mercadoLibre = {} }) => ({
  siteMetadata: {
    title: "Mercado Libre Store",
    meta: "Tienda Online",
    language: "en",
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
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: "Roboto",
            subsets: ["latin"],
            variants: ["100", "400", "700"],
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-theme-ui`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-mdx`,
  ],
})
