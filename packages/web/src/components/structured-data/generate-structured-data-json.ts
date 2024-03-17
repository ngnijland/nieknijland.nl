import type { Data, StructuredDataJsonLd } from "./types";

export function generateStructuredDataJson(data: Data): StructuredDataJsonLd {
  switch (data.type) {
    case "blog_posting": {
      return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: data.item.headline,
        image: data.item.image,
        datePublished: data.item.datePublished,
        dateModified: data.item.dateModified,
        author: [
          {
            "@type": "Person",
            ...data.item.author,
          },
        ],
      };
    }
    default: {
      throw new Error("Unknown structured data type");
    }
  }
}
