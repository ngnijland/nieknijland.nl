require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteUrl = "https://www.nieknijland.nl";

module.exports = {
  siteMetadata: {
    title: `Niek Nijland`,
    description: `A web engineer and travel enthousiast based in The Netherlands.`,
    url: siteUrl,
    image: "/images/og-image.png",
    twitterUsername: "@ngnijland",
  },
  trailingSlash: `never`,
  plugins: [
    `gatsby-plugin-open-graph-images`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
          allSanityPost(sort: {publishedAt: ASC}) {
            nodes {
              _updatedAt
              slug {
                current
              }
              publishedAt
            }
          }
        }
        `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allSanityPost: { nodes: allPosts },
        }) => {
          let blogUpdatedAt;

          // Normalize blog post data
          const posts = allPosts.reduce((acc, post) => {
            /**
             * Get the datetimestring of the last blog post
             *
             * publishedAt can be `null`, that means ordering the query on ASC sorts `null` to the end
             */
            if (post.publishedAt) {
              blogUpdatedAt = post.publishedAt;
            }

            return {
              ...acc,
              [`/blog/${post.slug.current}`]: post._updatedAt,
            };
          }, {});

          // When applicable add last updated datetime string to page
          const pages = allPages.map((page) => {
            // Get updatedAt datetime string for blog post detail pages from posts map
            const updatedAt = posts[page.path];

            if (updatedAt) {
              return { ...page, updatedAt };
            }

            if (page.path === "/blog") {
              return { ...page, updatedAt: blogUpdatedAt };
            }

            return page;
          });

          return pages;
        },
        excludes: ["/__generated/*"],
        serialize: ({ path, updatedAt }) => ({ url: path, lastmod: updatedAt }),
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "",
        sitemap: `${siteUrl}/sitemap-index.xml`,
        policy: [],
      },
    },
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
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `nieknijland.nl`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                site_url: url
              }
            }
          }
      `,
        feeds: [
          {
            title: "Niek Nijland's Blog",
            output: "/rss.xml",
            match: "^/blog/",
            language: "en",
            custom_elements: [
              {
                'atom:link href="https://www.nieknijland.nl/rss.xml" rel="self" type="application/rss+xml"':
                  null,
              },
            ],
            serialize: ({ query: { site, allSanityPost } }) =>
              allSanityPost.nodes.map((node) => ({
                title: node.title,
                description: convertPortableTexttoPlainText(node._rawExcerpt),
                author: "Niek Nijland",
                date: node.publishedAt,
                url: `${site.siteMetadata.site_url}/blog/${node.slug.current}`,
                guid: node.slug.current,
              })),
            query: `
            {
              allSanityPost(sort: {publishedAt: ASC}) {
                nodes {
                  _updatedAt
                  _rawExcerpt
                  title
                  slug {
                    current
                  }
                  publishedAt
                }
              }
            }
            `,
          },
        ],
      },
    },
  ],
};

function convertPortableTexttoPlainText(blocks) {
  if (!blocks) {
    return "";
  }
  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) {
        return "";
      }
      return block.children.map((child) => child.text).join("");
    })
    .join("\n\n");
}
