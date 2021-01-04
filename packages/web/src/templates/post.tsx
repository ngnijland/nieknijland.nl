import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import dayjs from "dayjs";

import SEO from "../components/seo";
import TopBar from "../components/topBar";
import PageTitle from "../components/pageTitle";
import PortableText from "../components/portableText";

export interface PortableText {
  _type: string;
  children: { text: string }[];
}

export interface PostProps {
  data: {
    post: {
      _rawBody: unknown;
      _rawExcerpt: PortableText[];
      publishedAt: string;
      title: string;
    };
  };
}

const Main = styled.main`
  max-width: 768px;
  margin: 0 32px;

  @media (min-width: 600px) {
    margin-right: 80px;
    margin-left: 80px;
  }

  @media (min-width: 928px) {
    margin-right: auto;
    margin-left: auto;
  }
`;

export const query = graphql`
  query PostQuery($id: String!) {
    post: sanityPost(_id: { eq: $id }) {
      id
      title
      publishedAt
      _rawBody
      _rawExcerpt
    }
  }
`;

export function toPlainText(blocks: PortableText[]): string {
  if (!blocks) {
    return "";
  }
  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) {
        return "";
      }
      return block.children.map((child) => child.text).join("");
    })
    .join("\n\n");
}

function Post({
  data: {
    post: { _rawBody, _rawExcerpt, publishedAt, title },
  },
}: PostProps): JSX.Element {
  return (
    <>
      <SEO title={`${title} | Blog`} description={toPlainText(_rawExcerpt)} />
      <TopBar />
      <Main>
        <article>
          <header>
            <PageTitle
              title={title}
              subtitle={dayjs(publishedAt).format("D MMM YYYY")}
            />
          </header>
          <PortableText blocks={_rawBody} />
        </article>
      </Main>
    </>
  );
}

export default Post;
