import React from "react"
import { graphql } from "gatsby"
import Img, { GatsbyImageProps } from "gatsby-image"
import styled from "styled-components"

import GridLayout from "../components/Layout"
import LinkedInIcon from "../components/LinkedInIcon"
import SEO from "../components/seo"
import TwitterIcon from "../components/TwitterIcon"
import { vh } from "../utils"

export interface IndexPageProps {
  data: {
    heroImage: {
      childImageSharp: GatsbyImageProps
    }
  }
}

const Header = styled.header`
  height: ${vh(100)};
`

const Layout = styled(GridLayout)`
  padding: ${vh(12)} 0;
`

const Title = styled.h1`
  margin: 0;

  font-size: 1.625rem;
`

const LinkWrapper = styled.div`
  position: relative;
  top: -0.125rem;
  display: flex;
  margin: 1.75rem 0 1.75rem -0.625rem;
`

const Link = styled.a`
  display: inline-block;
  width: 2.75rem;
  height: 2.75rem;

  box-sizing: border-box;
`

const TwitterLink = styled(Link)`
  padding: 0.125rem;
`

const LinkedInLink = styled(Link)`
  padding: 0.6875rem;
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
        <div>
          <Title>
            Hi, I&#39;m &#60;Niek/&#62; a web developer and travel enthousiast
            based in The Netherlands.
          </Title>
          <LinkWrapper>
            <TwitterLink
              href="https://twitter.com/nieknijland"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </TwitterLink>
            <LinkedInLink
              href="https://www.linkedin.com/in/nieknijland/"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </LinkedInLink>
          </LinkWrapper>
        </div>
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
