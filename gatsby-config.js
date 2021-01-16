module.exports = {
  siteMetadata: {
    title: `Bellotti Sorvetes`,
    description: `Desde 1996 oferecendo o melhor sorvete. Somos uma fábrica artesanal, amamos o que fazemos. Venha se apaixonar pelo nosso sorvete!`,
    author: `Bellotti Sorvetes`,
    phone: `5511995604471`,
    codeWhatsApp: `ZHTZSZDJJYBVO1`,
    email: `bellottisorvetes@gmail.com`,
    siteURL: `https://bellottisorvetes.com.br`,
    deliveryIfood: `https://www.ifood.com.br/delivery/sao-paulo-sp/bellotti-sorvetes-jardim-figueira-grande/daf6e79b-f761-4ca5-bd44-f9b3f267d142`,
    deliveryOrder: `*Entregas apenas para São Paulo - Capital.`,
    detailsOrder: `**Lembrando que nossa produção leva de 2 a 3 dias úteis. Mais
    detalhes serão dados através do WhatsApp (agendamento, pagamento,
    frete etc).`,
    detailsOnline: `***Confira se se temos esse sabor a pronta entrega`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contato`,
        path: `${__dirname}/contents/contato`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `promocoes`,
        path: `${__dirname}/contents/promocoes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sabores`,
        path: `${__dirname}/contents/sabores`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Titillium Web",
            weights: ["200", "300", "400", "700"],
          },
          {
            family: "Playfair Display",
            weights: ["500"],
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
