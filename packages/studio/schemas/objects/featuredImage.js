export const featuredImage = {
  title: "Featured image",
  name: "featuredImage",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: "Alternative text",
      name: "altText",
      type: "string",
      description: "Important for SEO and accessiblity.",
      validation: (Rule) =>
        Rule.error("You have to fill out the alternative text.").required(),
    },
  ],
};
