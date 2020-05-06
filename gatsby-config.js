module.exports = {
  siteMetadata: {
    title: `Covid Causes`,
    description: `A directory of individuals and organisations in Nigeria providing relief during the crisis.`,
    author: `Covid Causes NG`,
    keywords: `covid, covid 19, coronavirus, lockdown, Nigeria, Abuja, Lagos`,
    siteUrl: `https://covidcauses.ng`,
    siteImg: `/src/images/icon.png`
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
        name: `Covid Causes ng`,
        short_name: `covid causes ng`,
        start_url: `/`,
        background_color: `#3D7F58`,
        theme_color: `#3D7F58`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
          spaceId:  process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ],
}
