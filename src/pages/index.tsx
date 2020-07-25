import React from "react"
import styled from "styled-components"

import Hero from "../components/hero"
import PersonalImages from "../components/personalImages"
import Footer from "../components/footer"

const Main = styled.main`
  position: relative;
`

function IndexPage(): JSX.Element {
  return (
    <>
      <Hero />
      <Main>
        <PersonalImages />
      </Main>
      <Footer />
    </>
  )
}

export default IndexPage
