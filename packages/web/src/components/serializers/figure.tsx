import React from "react";
import { getFluidGatsbyImage } from "gatsby-source-sanity";
import Img from "gatsby-image";

export interface FigureProps {
  node: {
    asset: {
      _ref: string;
    };
    alt: string;
    caption: string;
  };
}

export function Figure({ node }: FigureProps): JSX.Element {
  const image = getFluidGatsbyImage(
    node.asset._ref,
    { maxWidth: 675 },
    {
      projectId: process.env.SANITY_API_PROJECT_ID || "",
      dataset: process.env.SANITY_API_DATASET || "",
    }
  );

  return (
    image && (
      <figure>
        <Img fluid={image} alt={node.alt} />
        <figcaption>{node.caption}</figcaption>
      </figure>
    )
  );
}
