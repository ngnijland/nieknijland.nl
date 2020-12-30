export const continent = {
  title: "Continent",
  name: "continent",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
