import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export interface SEOProps {
  description?: string;
  image?: string;
  lang?: string;
  meta?: ConcatArray<
    | { name: string; content: string; property?: undefined }
    | { property: string; content: string; name?: undefined }
  >;
  title?: string;
}

function SEO({
  description = "",
  image,
  lang = "en",
  meta = [],
  title,
}: SEOProps): JSX.Element {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
            url
            twitterUsername
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaImage = `${site.siteMetadata.url}${
    image || site.siteMetadata.image
  }`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
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
          content: site.siteMetadata.twitterUsername,
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
    />
  );
}

export default SEO;
