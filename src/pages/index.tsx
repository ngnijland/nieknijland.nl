import React from "react"
import { graphql } from "gatsby"
import Img, { GatsbyImageProps } from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/seo"

export interface IndexPageProps {
  data: {
    heroImage: {
      childImageSharp: GatsbyImageProps
    }
  }
}

const Header = styled.header`
  height: 100vh;
`

const TitleWrapper = styled.div`
  margin-top: 16vh;
`

const Title = styled.h1`
  margin: 0;

  font-size: 1.625rem;
`

const StyledImg = styled(Img)`
  grid-column: 1 / 4;

  border-radius: 1rem;
`

function IndexPage({ data }: IndexPageProps): JSX.Element {
  return (
    <Header>
      <SEO title="Home" />
      <Layout>
        <TitleWrapper>
          <Title>
            Hi, I&#39;m &#60;Niek/&#62; a web developer and travel enthousiast
            based in The Netherlands.
          </Title>
          <div>
            <a href="https://twitter.com/nieknijland">T</a>
            <a href="https://www.linkedin.com/in/nieknijland/">L</a>
          </div>
        </TitleWrapper>
        <StyledImg fluid={data.heroImage.childImageSharp.fluid} />
      </Layout>
    </Header>
  )
}

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "nieknijland.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 750) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
