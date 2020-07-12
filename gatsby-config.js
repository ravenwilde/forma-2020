const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

console.log('PRISMIC_ACCESS_TOKEN =>', process.env.PRISMIC_ACCESS_TOKEN)

module.exports = {
  siteMetadata: {
    title: `Forma`,
    description: `Yarn, Weaving and Knitting Supplies - Whitmore Lake, MI`,
    author: `Jennifer Scroggins - jennifer@ravenwilde.com`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'forma', // required
        defaultLang: 'en-us', // optional, but recommended
        accessToken: process.env.PRISMIC_ACCESS_TOKEN, // optional
        path: '/preview', // optional, default: /preview
        previews: true, // optional, default: false
        sharpKeys: [
          /image|photo|picture/, // (default)
          'profilepic',
        ],
      }
    },
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
