import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { getImage } from "gatsby-plugin-image";

import { Image, CaptionPosition } from "./image";
import Layout from "./layout";
import ScrollDownIndicator from "./scrollDownIndicator";

const Image1 = styled(Image)`
  grid-column: 1 / span 3;

  @media (min-width: 600px) {
    grid-column: 4 / span 4;
  }

  @media (min-width: 1000px) {
    grid-column: 2 / span 4;
  }

  @media (min-width: 1200px) {
    grid-column: 3 / span 5;
  }
`;

const Image2 = styled(Image)`
  grid-column: 1 / span 4;

  @media (min-width: 600px) {
    grid-column: span 3 / -1;
  }

  @media (min-width: 1000px) {
    grid-column: 1 / span 3;
  }

  @media (min-width: 1200px) {
    grid-column: 1 / span 4;
  }
`;

const Image3 = styled(Image)`
  grid-column: 1 / span 4;

  @media (min-width: 600px) {
    grid-column: 2 / span 4;
    grid-row: 2;
  }

  @media (min-width: 1000px) {
    grid-column: 4 / span 4;
    grid-row: 2;
  }

  @media (min-width: 1200px) {
    grid-column: 5 / span 6;
    grid-row: 2;
  }
`;

export function PersonalImages(): JSX.Element {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "homepage-travel-image-1.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      image2: file(relativePath: { eq: "homepage-travel-image-2.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      image3: file(relativePath: { eq: "homepage-travel-image-3.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);

  const image1 = getImage(data.image1);
  const image2 = getImage(data.image2);
  const image3 = getImage(data.image3);

  return (
    <Layout verticalGap>
      <ScrollDownIndicator />
      <Image1
        alt="Rice fields between mountains"
        caption="Rice fields in Vietnam"
        captionPosition={CaptionPosition.Top}
        image={image1}
      />
      <Image2
        alt="Me standing on a big rock"
        caption="Joshua Tree National Park, California"
        image={image2}
      />
      <Image3
        alt="Brice Canyon hoodoos"
        caption="Bryce Canyon National Park, Utah"
        image={image3}
      />
    </Layout>
  );
}
