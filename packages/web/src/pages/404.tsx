import React from "react";
import { Link, Script } from "gatsby";
import styled from "styled-components";

import { SEO } from "../components/seo";
import Footer from "../components/footer";
import TopBar from "../components/topBar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Title = styled.h1`
  margin: 0 2rem;

  font-size: clamp(1.5rem, 3.75vw, 4.5rem);
  text-align: center;
`;

const Line = styled.div`
  content: "";

  display: block;
  width: 0.0625rem;
  height: 2rem;
  margin: 1rem 0;
  min-height: 1rem;

  background-color: var(--text-color);

  @media (min-width: 600px) {
    height: 4rem;
  }
`;

export function Head() {
  return <SEO title="404: Not found" />;
}

function NotFoundPage(): JSX.Element {
  return (
    <>
      <Wrapper>
        <TopBar />
        <Main>
          <Title>This page does not exist...</Title>
          <Line />
          <Link to="/">Go to the homepage</Link>
          <Line />
          <Link to="/trips">Take a look at my travel experiences</Link>
          <Line />
          <Link to="/blog">Read my articles</Link>
          <Footer title="Or find me at:" />
        </Main>
      </Wrapper>
      <Script
        id="script__plausible-404"
        dangerouslySetInnerHTML={{
          __html: `document.addEventListener('DOMContentLoaded', function () { plausible('404', { props: { path: document.location.pathname } }); });`,
        }}
      />
    </>
  );
}

export default NotFoundPage;
