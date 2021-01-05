module.exports = {
  siteMetadata: {
    title: `Joo Han Kim`,
    description: `A web developer based in Emden, Germany.`,
    siteUrl: `https://joohan.kim`,
    author: `@joobacca`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-htaccess`,
      options: {
        https: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/static`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `joohan.kim`,
        short_name: `joobacca`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#087ca7`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`*`],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`open sans:400,700`],
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
