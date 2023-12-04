import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export interface SEOProps {
  children?: React.ReactNode;
  description?: string;
  image?: string;
  title: string;
}

export function SEO({
  children,
  description,
  image,
  title: titlePrefix,
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

  const title = `${titlePrefix} | ${defaultTitle}`;

  // TODO: improve default description. Use home page subtitle?
  return (
    <>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaImage} />

      <meta name="og:title" content={title} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:image" content={metaImage} />
      <meta name="og:type" content="website" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      {children}
    </>
  );
}
