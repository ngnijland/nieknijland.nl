import { format } from "date-fns";

export const trip = {
  title: "Trip",
  name: "trip",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "A short title that describes the trip.",
    },
    {
      title: "Featured image",
      name: "featuredImage",
      type: "featuredImage",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "startDate",
      type: "date",
      title: "Start date",
      description: "Start date of the trip.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "endDate",
      type: "date",
      title: "End date",
      description: "End date of the trip.",
      validation: (Rule) => Rule.required(),
    },
  ],
  orderings: [
    {
      name: "startDateAsc",
      title: "Start date new -> old",
      by: [
        {
          field: "startDate",
          direction: "asc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
    {
      name: "startDateDesc",
      title: "Start date old -> new",
      by: [
        {
          field: "startDate",
          direction: "desc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
    {
      name: "endDateAsc",
      title: "End date new -> old",
      by: [
        {
          field: "endDate",
          direction: "asc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
    {
      name: "endDateDesc",
      title: "End date old -> new",
      by: [
        {
          field: "endDate",
          direction: "desc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      startDate: "startDate",
      endDate: "endDate",
    },
    prepare({ title, startDate, endDate }) {
      return {
        title,
        subtitle: `${format(new Date(startDate), "dd MMM yyyy")} - ${format(
          new Date(endDate),
          "dd MMM yyyy"
        )}`,
      };
    },
  },
};
