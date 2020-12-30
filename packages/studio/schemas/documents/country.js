import { countryCodes } from "./helpers";

export const country = {
  title: "Country",
  name: "country",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Code",
      name: "code",
      type: "string",
      options: {
        list: countryCodes,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Continent",
      name: "continent",
      type: "reference",
      to: [{ type: "continent" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
