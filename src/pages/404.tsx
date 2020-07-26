import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"
import Footer from "../components/footer"
import TopBar from "../components/topBar"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  font-size: 0.875rem;
`

const Title = styled.h1`
  margin: 0 2rem;

  font-size: clamp(1.5rem, 3.75vw, 4.5rem);
  text-align: center;
`

const Line = styled.div`
  content: "";

  display: block;
  width: 0.0625rem;
  height: 2rem;
  margin: 1rem 0;

  background-color: var(--text-color);

  @media (min-width: 600px) {
    height: 4rem;
  }
`

function NotFoundPage(): JSX.Element {
  return (
    <Wrapper>
      <TopBar />
      <Main>
        <SEO title="404: Not found" />
        <Title>This page does not exist...</Title>
        <Line />
        <Link to="/">Go to the homepage</Link>
        <Footer title="Or find me at:" />
      </Main>
    </Wrapper>
  )
}

export default NotFoundPage
