import React from "react";
import styled from "styled-components";

import Hero from "../components/hero";
import { PersonalImages } from "../components/personalImages";
import Footer from "../components/footer";
import { SEO } from "../components/seo";

const Main = styled.main`
  position: relative;
`;

export function Head() {
  return <SEO title="Home" />;
}

function IndexPage(): JSX.Element {
  return (
    <>
      <Hero />
      <Main>
        <PersonalImages />
      </Main>
      <Footer title="Follow me at:" />
    </>
  );
}

export default IndexPage;
