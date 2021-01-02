import React from "react";
import BasePortableText from "@sanity/block-content-to-react";
import { getFluidGatsbyImage } from "gatsby-source-sanity";
import Img from "gatsby-image";

export interface PortableTextProps {
  blocks: unknown;
}

export interface FigureProps {
  node: {
    asset: {
      _ref: string;
    };
    alt: string;
    caption: string;
  };
}

export interface CodeProps {
  node: {
    language: string;
    code: string;
  };
}

function Figure({ node }: FigureProps) {
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

function Code({ node: { language, code } }: CodeProps) {
  return (
    <pre data-language={language}>
      <code>{code}</code>
    </pre>
  );
}

function PortableText({ blocks }: PortableTextProps): JSX.Element {
  return (
    <BasePortableText
      blocks={blocks}
      serializers={{
        container: "section",
        types: {
          postImage: Figure,
          code: Code,
        },
      }}
      projectId={process.env.SANITY_API_PROJECT_ID}
      dataset={process.env.SANITY_API_DATASET}
    />
  );
}

export default PortableText;
