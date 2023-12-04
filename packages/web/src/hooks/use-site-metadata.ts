import { graphql, useStaticQuery } from "gatsby";

type DefaultMetaData = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      url: string;
      image: string;
      twitterUsername: string;
    };
  };
};

export const useSiteMetadata = () => {
  const data = useStaticQuery<DefaultMetaData>(graphql`
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
  `);

  return data.site.siteMetadata;
};
