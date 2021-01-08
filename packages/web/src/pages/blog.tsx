import React from "react";
import styled from "styled-components";
import { Link, PageProps, graphql } from "gatsby";
import dayjs from "dayjs";

import SEO from "../components/seo";
import TopBar from "../components/topBar";
import PageTitle from "../components/pageTitle";
import Footer from "../components/footer";

export interface BlogProps extends PageProps {
  data: {
    allSanityPost: {
      nodes: {
        _id: string;
        title: string;
        slug: {
          current: string;
        };
        publishedAt: string;
      }[];
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

const List = styled.ul`
  padding: 0;
  margin: 0;

  list-style: none;
`;

const Item = styled.li`
  :not(:last-of-type)::after {
    display: block;
    height: 0.0625rem;

    background-color: var(--text-color);

    content: "";
  }
`;

const Article = styled.article`
  padding: 2rem 0;

  @media (min-width: 1000px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  a {
    text-decoration: none;
  }
`;

const Title = styled.h1`
  margin: 0 0 0.5rem;

  font-size: clamp(1.5rem, 2.5vw, 2.625rem);

  @media (min-width: 1200px) {
    margin-bottom: 0.75rem;
  }
`;

const Date = styled.span`
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  color: var(--text-color-highlight);
`;

const Spacer = styled.div`
  height: 1rem;

  @media (min-width: 1000px) {
    height: 3rem;
  }
`;

export const pageQuery = graphql`
  {
    allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { publishedAt: { ne: null } }
    ) {
      nodes {
        _id
        title
        slug {
          current
        }
        publishedAt
      }
    }
  }
`;

function Blog({ data }: BlogProps): JSX.Element {
  return (
    <>
      <SEO title="Blog" />
      <TopBar />
      <Main>
        <header>
          <PageTitle title="Blog" lineText="Recent posts" />
        </header>
        <section>
          <List>
            {data.allSanityPost.nodes.map(
              ({ _id, title, slug: { current: slug }, publishedAt }) => (
                <Item key={_id}>
                  <Article>
                    <Link to={`/blog/${slug}`}>
                      <Title>{title}</Title>
                    </Link>
                    <Date>{dayjs(publishedAt).format("D MMM YYYY")}</Date>
                  </Article>
                </Item>
              )
            )}
          </List>
        </section>
      </Main>
      <Spacer />
      <Footer title="Find me at:" />
    </>
  );
}

export default Blog;
