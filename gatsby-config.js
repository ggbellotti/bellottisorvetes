module.exports = {
  siteMetadata: {
    title: `Bellotti Sorvetes`,
    description: `Desde 1996 oferecendo o melhor sorvete. Somos uma fábrica artesanal, amamos o que fazemos. Venha se apaixonar pelo nosso sorvete!`,
    author: `Bellotti Sorvetes`,
    phone: `5511995604471`,
    codeWhatsApp: `ZHTZSZDJJYBVO1`,
    email: `bellottisorvetes@gmail.com`,
    siteURL: `https://bellottisorvetes.com.br`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
              staticFolderName: "static",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1280,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-images-zoom",
          },
          `gatsby-remark-lazy-load`,
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/img/uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bannerHome`,
        path: `${__dirname}/contents/bannerHome`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "JetBrains Mono",
            weights: ["100", "400"],
          },
          {
            family: "Roboto Mono",
            weights: ["100", "400"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bellotti Sorvetes`,
        short_name: `Bellotti Sorvetes`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `static/img/logo-bellotti-sorvetes.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-transition-link`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
