import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import dayjs from "dayjs";

import { SEO } from "../components/seo";
import TopBar from "../components/topBar";
import { PageTitle } from "../components/pageTitle";
import { PortableText } from "../components/portableText";
import Footer from "../components/footer";

import type { HeadProps, PageProps } from "gatsby";

export interface PortableText {
  _type: string;
  children: { text: string }[];
}

type DataProps = {
  post: {
    _rawBody: unknown;
    _rawExcerpt: PortableText[];
    canonicalURL: string;
    publishedAt: string;
    title: string;
  };
};

type PageContext = {
  ogImage: {
    path: string;
    width: number;
    height: number;
  };
};

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

const Spacer = styled.div`
  height: 2rem;
`;

export const query = graphql`
  query PostQuery($id: String!) {
    post: sanityPost(_id: { eq: $id }) {
      canonicalURL
      id
      title
      publishedAt
      _rawBody
      _rawExcerpt
    }
  }
`;

function toPlainText(blocks: PortableText[]): string {
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

export function Head({
  data: {
    post: { _rawExcerpt, canonicalURL, title },
  },
  pageContext: { ogImage },
}: HeadProps<DataProps, PageContext>) {
  return (
    <SEO
      title={`${title} | Blog`}
      description={toPlainText(_rawExcerpt)}
      image={ogImage.path}
    >
      {canonicalURL ? <link rel="cannonical" href={canonicalURL} /> : null}
    </SEO>
  );
}

function Post({
  data: {
    post: { _rawBody, canonicalURL, publishedAt, title },
  },
}: PageProps<DataProps>): JSX.Element {
  const link = [];

  if (canonicalURL) {
    link.push({ rel: "cannonical", href: canonicalURL });
  }

  return (
    <>
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
      <Spacer />
      <Footer title="Find me at:" />
    </>
  );
}

export default Post;
