module.exports = {
  siteMetadata: {
    title: `Niek Nijland Portfolio`,
    description: `Info about Niek Nijland.`,
    url: "https://www.nieknijland.nl",
    image: "/images/og-image.png",
    twitterUsername: "@nieknijland",
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
        name: `Niek Nijland portfolio`,
        short_name: `Niek Nijland`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#B2F3D8`,
        display: `minimal-ui`,
        icon: `src/images/icon.jpeg`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
  ],
}
