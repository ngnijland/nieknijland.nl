export default {
  title: "Place",
  name: "place",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Country",
      name: "country",
      type: "reference",
      to: [{ type: "country" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
