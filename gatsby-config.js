module.exports = {
  siteMetadata: {
    title: `Puro Melamina`,
    description: `Trucos, tutoriales e ideas para muebles de melamina`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
          // Specify the URL of the WordPress source
          baseUrl: `localhost/melamina`,
          protocol: `http`,
          minimizeDeprecationNotice: true,
          // Indicates if a site is hosted on WordPress.com
          hostingWPCOM: false,
          // Specify which URL structures to fetch
          includedRoutes: [
            '**/posts',
            '**/tags',
            '**/categories',
            '/*/*/media',
            '/*/*/menus', // <== Menu api endpoint
            '/*/*/menu-locations',
          ],
          plugins: [
            {
              resolve: `@draftbox-co/gatsby-wordpress-inline-images`,
              options: {
                baseUrl: `localhost/melamina`,
                protocol: `http`
              }
            }
          ], 
          // searchAndReplaceContentUrls: {
          //   sourceUrl: 'localhost/melamina',
          //   replacementUrl: 'http://localhost:8000'
          // }
      }
  }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
