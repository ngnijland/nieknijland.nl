import React from "react";
import { getFluidGatsbyImage } from "gatsby-source-sanity";
import Img from "gatsby-image";
import styled from "styled-components";

export interface FigureProps {
  node: {
    asset: {
      _ref: string;
    };
    alt: string;
    caption: string;
  };
}

const FigureElement = styled.figure`
  margin: 1em 0;

  .gatsby-image-wrapper {
    font-size: 0;

    > div {
      width: auto !important;
      padding-bottom: 0 !important;
    }
  }
`;

const FigCaption = styled.figcaption`
  padding: 0 1rem;
  margin-top: 0.75rem;

  font-size: 0.875rem;
  color: var(--text-color-secondary);
`;

export function Figure({
  node: { alt, asset, caption },
}: FigureProps): JSX.Element | null {
  const image = getFluidGatsbyImage(
    asset._ref,
    { maxWidth: 1000 },
    {
      projectId: process.env.SANITY_API_PROJECT_ID || "",
      dataset: process.env.SANITY_API_DATASET || "",
    }
  );

  return (
    image && (
      <FigureElement>
        <Img
          fluid={image}
          alt={alt}
          imgStyle={{
            position: "static",
            width: "auto",
            height: "auto",
            maxWidth: "100%",
            borderRadius: "1rem",
          }}
        />
        {caption && <FigCaption>{caption}</FigCaption>}
      </FigureElement>
    )
  );
}
