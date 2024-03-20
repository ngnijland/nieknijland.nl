import React from "react";
import { getGatsbyImageData } from "gatsby-source-sanity";
import { GatsbyImage } from "gatsby-plugin-image";
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
    border-radius: 1rem;
  }
`;

const FigCaption = styled.figcaption`
  padding: 0 1rem;
  margin-top: 0.75rem;

  font-size: 0.875rem;
  color: var(--text-color-secondary);
  text-align: center;
`;

export function Figure({
  node: { alt, asset, caption },
}: FigureProps): JSX.Element | null {
  const image = getGatsbyImageData(
    asset._ref,
    { layout: "fullWidth" },
    {
      projectId: process.env.GATSBY_SANITY_API_PROJECT_ID || "",
      dataset: process.env.GATSBY_SANITY_API_DATASET || "",
    }
  );

  return (
    image && (
      <FigureElement>
        <GatsbyImage image={image} alt={alt} backgroundColor="#eff0f0" />
        {caption && <FigCaption>{caption}</FigCaption>}
      </FigureElement>
    )
  );
}
