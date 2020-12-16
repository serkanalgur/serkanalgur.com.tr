module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Serkan Algur - Developer`,
        short_name: `SerkanAlgur`,
        start_url: `/`,
        background_color: `#f1f6f9`,
        theme_color: `#14274e`,
        display: `standalone`,
        icon: 'src/images/favicon.png'
      }
    }
  ]
}
