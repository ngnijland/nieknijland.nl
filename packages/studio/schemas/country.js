export default {
  title: "Country",
  name: "country",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Continent",
      name: "continent",
      type: "reference",
      to: [{ type: "continent" }],
    },
  ],
};
