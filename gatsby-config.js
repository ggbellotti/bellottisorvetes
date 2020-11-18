module.exports = {
  siteMetadata: {
    title: `Bellotti Sorvetes`,
    description: `Desde 1996 oferecendo o melhor sorvete. Somos uma fábrica artesanal, amamos o que fazemos. Venha se apaixonar pelo nosso sorvete!`,
    author: `Bellotti Sorvetes`,
    phone: `11995604471`,
    email: `bellottisorvetes@gmail.com`,
    siteURL: `https://bellottisorvetes.com.br`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img`,
      },
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/img/uploads`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Titillium Web",
            variable: true,
            weights: ["200", "300", "400", "700"],
          },
          {
            family: "Playfair Display",
            variable: true,
            weights: ["500"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
