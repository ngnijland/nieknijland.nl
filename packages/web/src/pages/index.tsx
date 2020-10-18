import React from "react"
import styled from "styled-components"

import Hero from "../components/hero"
import PersonalImages from "../components/personalImages"
import Footer from "../components/footer"
import SEO from "../components/seo"

const Main = styled.main`
  position: relative;
`

function IndexPage(): JSX.Element {
  return (
    <>
      <SEO title="Home" />
      <Hero />
      <Main>
        <PersonalImages />
      </Main>
      <Footer title="Find me at:" />
    </>
  )
}

export default IndexPage
