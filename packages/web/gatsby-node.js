const { createOpenGraphImage } = require("gatsby-plugin-open-graph-images");

function shuffle(array) {
  const newArray = [...array];
  let m = newArray.length;
  let t;
  let i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = newArray[m];
    newArray[m] = newArray[i];
    newArray[i] = t;
  }

  return newArray;
}

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    Query: {
      allRandomSanityCountry: {
        type: ["SanityCountry"],
        resolve: (source, args, context) => {
          const countries = context.nodeModel.getAllNodes({
            type: `SanityCountry`,
          });

          return shuffle(countries);
        },
      },
      allRandomSanityPlace: {
        type: ["SanityPlace"],
        resolve: (source, args, context) => {
          const places = context.nodeModel.getAllNodes({
            type: `SanityPlace`,
          });

          return shuffle(places);
        },
      },
    },
  });
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      allSanityPost: { nodes: posts },
    },
  } = await graphql(`
    {
      allSanityPost(filter: { publishedAt: { ne: null } }) {
        nodes {
          _id
          slug {
            current
          }
        }
      }
    }
  `);

  posts.forEach(({ _id: id, slug: { current: slug } }) => {
    createPage({
      path: `/blog/${slug}`,
      component: require.resolve("./src/templates/post.tsx"),
      context: {
        id,
        ogImage: createOpenGraphImage(createPage, {
          path: `/og-images/blogs/${slug}.png`,
          component: require.resolve("./src/templates/post-og-image.tsx"),
          context: { id },
        }),
      },
    });
  });
};
