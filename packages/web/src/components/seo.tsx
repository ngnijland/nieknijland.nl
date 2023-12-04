import React from "react";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export interface SEOProps {
  description?: string;
  image?: string;
  lang?: string;
  meta?: ConcatArray<
    | { name: string; content: string; property?: undefined }
    | { property: string; content: string; name?: undefined }
  >;
  link?: { rel: string; href: string }[];
  title?: string;
}

function SEO({
  description = "",
  image,
  lang = "en",
  meta = [],
  link = [],
  title,
}: SEOProps): JSX.Element {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    url,
    twitterUsername,
  } = useSiteMetadata();

  const metaDescription = description || defaultDescription;
  const metaImage = `${url}${image || defaultImage}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${defaultTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "image",
          content: metaImage,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: "og:image",
          content: metaImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: twitterUsername,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: "twitter:image",
          content: metaImage,
        },
      ].concat(meta)}
      link={link}
    />
  );
}

export default SEO;
