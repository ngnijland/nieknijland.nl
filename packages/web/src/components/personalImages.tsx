import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import Image, { CaptionPosition } from "../components/image";
import Layout from "../components/layout";
import ScrollDownIndicator from "../components/scrollDownIndicator";

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

function PersonalImages(): JSX.Element {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "homepage-travel-image-1.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "homepage-travel-image-2.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "homepage-travel-image-3.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout verticalGap>
      <ScrollDownIndicator />
      <Image1
        alt="Rice fields between mountains"
        caption="Rice fields in Vietnam"
        captionPosition={CaptionPosition.Top}
        fluid={data.image1.childImageSharp.fluid}
      />
      <Image2
        alt="Me standing on a big rock"
        caption="Joshua Tree National Park, California"
        fluid={data.image2.childImageSharp.fluid}
      />
      <Image3
        alt="Brice Canyon hoodoos"
        caption="Bryce Canyon National Park, Utah"
        fluid={data.image3.childImageSharp.fluid}
      />
    </Layout>
  );
}

export default PersonalImages;
