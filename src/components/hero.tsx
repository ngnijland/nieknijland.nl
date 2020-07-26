import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import GithubIcon from "./githubIcon"
import GridLayout from "./layout"
import Image from "./image"
import LinkedInIcon from "./linkedinIcon"
import SEO from "./seo"
import TwitterIcon from "./twitterIcon"

const Header = styled.header`
  min-height: 100%;
`

const Layout = styled(GridLayout)`
  padding: 12vh 0;

  @media (min-width: 1000px) {
    padding: 25vh 0;
  }
`

const TitleWrapper = styled.div`
  @media (min-width: 1000px) {
    position: relative;
    top: 0.25rem;

    display: flex;
    grid-column: 1 / span 5;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    grid-column: 1 / span 7;
  }
`

const Title = styled.h1`
  margin: 0;

  font-size: 1.5rem;

  @media (min-width: 600px) {
    font-size: 2.625rem;
  }

  @media (min-width: 1400px) {
    font-size: 3.5rem;
  }

  @media (min-width: 1600px) {
    font-size: 4rem;
  }

  @media (min-width: 1800px) {
    font-size: 4.5rem;
  }
`

const AvoidWrap = styled.span`
  display: block;
`

const Tag = styled.span`
  background-color: #8b9862;
  background-image: linear-gradient(
    90deg,
    #d12c1f ${(100 / 6) * 1}%,
    #f18f35 ${(100 / 6) * 1}%,
    #f18f35 ${(100 / 6) * 2}%,
    #fced4f ${(100 / 6) * 2}%,
    #fced4f ${(100 / 6) * 3}%,
    #367e33 ${(100 / 6) * 3}%,
    #367e33 ${(100 / 6) * 4}%,
    #1951f5 ${(100 / 6) * 4}%,
    #1951f5 ${(100 / 6) * 5}%,
    #6c1a84 ${(100 / 6) * 5}%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const LinkWrapper = styled.div`
  position: relative;
  top: -0.125rem;
  left: -0.625rem;

  display: flex;
  margin: 1.75rem 0;

  @media (min-width: 600px) {
    top: -0.25rem;
  }

  @media (min-width: 1000px) {
    margin-bottom: 0;
  }
`

const Link = styled.a`
  display: inline-block;
  width: 2.75rem;
  height: 2.75rem;

  box-sizing: border-box;

  @media (min-width: 600px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`

const TwitterLink = styled(Link)`
  padding: 0.125rem;

  @media (min-width: 600px) {
    padding: 0;
    margin-right: 1rem;
  }
`

const GithubLink = styled(Link)`
  padding: 0.5625rem;

  @media (min-width: 600px) {
    padding: 0.5rem;
    margin-right: 1rem;
  }
`

const LinkedInLink = styled(Link)`
  padding: 0.6875rem;

  @media (min-width: 600px) {
    padding: 0.625rem;
  }
`

const StyledImage = styled(Image)`
  grid-column: 1 / span 3;

  @media (min-width: 1000px) {
    grid-column: span 3 / -1;
    grid-row: 1;
  }

  @media (min-width: 1200px) {
    grid-column: span 5 / -1;
  }
`

function Hero(): JSX.Element {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "nieknijland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Header>
      <SEO title="Home" />
      <Layout>
        <TitleWrapper>
          <Title>
            <AvoidWrap>
              Hi, I&#39;m <Tag>&#60;</Tag>Niek<Tag>/&#62;</Tag>
            </AvoidWrap>
            <AvoidWrap>a web developer and</AvoidWrap>
            <AvoidWrap>travel enthousiast based</AvoidWrap>
            <AvoidWrap>in The Netherlands.</AvoidWrap>
          </Title>
          <LinkWrapper>
            <TwitterLink
              href="https://twitter.com/nieknijland"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </TwitterLink>
            <GithubLink href="https://github.com/ngnijland" aria-label="GitHub">
              <GithubIcon />
            </GithubLink>
            <LinkedInLink
              href="https://www.linkedin.com/in/nieknijland/"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </LinkedInLink>
          </LinkWrapper>
        </TitleWrapper>
        <StyledImage
          fluid={data.image.childImageSharp.fluid}
          alt="Portrait picture of me"
        />
      </Layout>
    </Header>
  )
}

export default Hero
