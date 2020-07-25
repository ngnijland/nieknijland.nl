import React from "react"
import styled from "styled-components"

import Hero from "../components/hero"
import PersonalImages from "../components/personalImages"

const Main = styled.main`
  position: relative;

  margin-bottom: 5rem;

  @media (min-width: 1200px) {
    margin-bottom: 10rem;
  }
`

function IndexPage(): JSX.Element {
  return (
    <>
      <Hero />
      <Main>
        <PersonalImages />
      </Main>
    </>
  )
}

export default IndexPage
