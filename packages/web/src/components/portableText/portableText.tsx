import React from "react";
import styled from "styled-components";
import BlockContent from "@sanity/block-content-to-react";

import { Code, Figure } from "./serializers";

export interface PortableTextProps {
  blocks: unknown;
}

const Container = styled.section`
  font-size: clamp(1.125rem, 3vw, 1.25rem);
  line-height: 1.5;

  > h1,
  > h2,
  > h3,
  > h4 {
    line-height: 1.25em;
    margin: 0 0 0.5rem;
  }

  > h1 {
    font-size: 1.85em;
    margin-top: 2.5rem;
  }

  > h2 {
    font-size: 1.6em;
    margin-top: 2rem;
  }

  > h3 {
    font-size: 1.4em;
    margin-top: 1.5rem;
  }

  > h4 {
    font-size: 1.2em;
    margin-top: 1.25rem;
  }

  > blockquote {
    margin: 1em 0 1em 1em;

    font-size: 1.25em;
    color: var(--text-color-secondary);
  }

  > p:first-of-type {
    margin-top: 0;
  }

  code {
    padding: 0.1em 0.25rem;

    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    font-size: 0.8em;

    background-color: #e5e5e5;
    border-radius: 0.25rem;
  }
`;

export function PortableText({ blocks }: PortableTextProps): JSX.Element {
  return (
    <BlockContent
      blocks={blocks}
      serializers={{
        container: Container,
        types: {
          postImage: Figure,
          code: Code,
        },
      }}
      projectId={process.env.GATSBY_SANITY_API_PROJECT_ID}
      dataset={process.env.GATSBY_SANITY_API_DATASET}
    />
  );
}
