import React from "react";
import styled from "styled-components";

import GithubIcon from "../components/githubIcon";
import LinkedInIcon from "../components/linkedinIcon";
import TwitterIcon from "../components/twitterIcon";

export interface FooterProps {
  title?: string;
}

const FooterComponent = styled.footer`
  display: flex;
  justify-content: center;
  padding-bottom: 4rem;

  @media (min-width: 1200px) {
    padding-bottom: 6rem;
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ::before {
    content: "";

    display: block;
    width: 0.0625rem;
    height: 6rem;
    margin: 1rem 0;

    background-color: var(--text-color);

    @media (min-width: 600px) {
      height: 8rem;
    }

    @media (min-width: 1200px) {
      height: 10rem;
    }
  }
`;

const FooterTitle = styled.h1`
  margin: 0 0 0.25rem;

  font-size: 1rem;
  font-weight: normal;
`;

const LinkWrapper = styled.div`
  display: flex;
`;

const Link = styled.a`
  display: inline-block;
  width: 2.75rem;
  height: 2.75rem;

  box-sizing: border-box;
`;

const TwitterLink = styled.span`
  display: inline-block;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0.125rem;

  box-sizing: border-box;
`;

const GithubLink = styled(Link)`
  padding: 0.5625rem;
`;

const LinkedInLink = styled(Link)`
  padding: 0.6875rem;
`;

function Footer({ title }: FooterProps): JSX.Element {
  return (
    <FooterComponent>
      <FooterWrapper>
        {title && <FooterTitle>{title}</FooterTitle>}
        <LinkWrapper>
          <GithubLink href="https://github.com/ngnijland" aria-label="GitHub">
            <GithubIcon />
          </GithubLink>
          <LinkedInLink
            href="https://www.linkedin.com/in/nieknijland/"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </LinkedInLink>
          <TwitterLink
            aria-label="Twitter"
            data-tip="My twitter account is suspended for an unknow reason to me. I'll disable this link until my account is unsuspended."
          >
            <TwitterIcon color="#ccc" />
          </TwitterLink>
        </LinkWrapper>
      </FooterWrapper>
    </FooterComponent>
  );
}

export default Footer;
