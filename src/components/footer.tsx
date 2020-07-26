import React from "react"
import styled from "styled-components"

import GithubIcon from "../components/githubIcon"
import LinkedInIcon from "../components/linkedinIcon"
import TwitterIcon from "../components/twitterIcon"

const FooterComponent = styled.footer`
  display: flex;
  justify-content: center;
  padding-bottom: 4rem;

  @media (min-width: 1200px) {
    padding-bottom: 6rem;
  }
`

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ::before {
    content: "";

    display: block;
    width: 0.0625rem;
    height: 6rem;
    margin: 0.5rem 0 1rem;

    background-color: var(--text-color);

    @media (min-width: 600px) {
      height: 8rem;
    }

    @media (min-width: 1200px) {
      height: 10rem;
    }
  }
`

const FooterTitle = styled.h1`
  margin: 0 0 0.25rem;

  font-size: 0.875rem;
  font-weight: normal;
`

const LinkWrapper = styled.div`
  display: flex;
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

const GithubLink = styled(Link)`
  padding: 0.5625rem;
`

const LinkedInLink = styled(Link)`
  padding: 0.6875rem;
`

function Footer(): JSX.Element {
  return (
    <FooterComponent>
      <FooterWrapper>
        <FooterTitle>Find me at:</FooterTitle>
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
      </FooterWrapper>
    </FooterComponent>
  )
}

export default Footer
