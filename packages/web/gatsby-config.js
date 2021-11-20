require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Niek Nijland`,
    description: `Info about Niek Nijland.`,
    url: "https://www.nieknijland.nl",
    image: "/images/og-image.png",
    twitterUsername: "@ngnijland",
  },
  plugins: [
    `gatsby-plugin-open-graph-images`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 85,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Niek Nijland`,
        short_name: `Niek`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#B2F3D8`,
        display: `minimal-ui`,
        icon: `src/images/icon.jpeg`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.GATSBY_SANITY_API_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_API_DATASET,
      },
    },
  ],
};
