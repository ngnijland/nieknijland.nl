export default {
  title: "Place",
  name: "place",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Country",
      name: "country",
      type: "reference",
      to: [{ type: "country" }],
    },
  ],
};
