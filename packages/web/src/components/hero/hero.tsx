import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import {
  Header,
  Layout,
  TitleWrapper,
  Title,
  AvoidWrap,
  Text,
  LinkWrapper,
  TwitterLink,
  GithubLink,
  LinkedInLink,
  StyledImage,
} from "./elements";

import GithubIcon from "../githubIcon";
import LinkedInIcon from "../linkedinIcon";
import Tag from "../tag";
import TwitterIcon from "../twitterIcon";

export function Hero(): JSX.Element {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "nieknijland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <Header>
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
          <Text>
            Check <Link to="/blog">articles I&apos;ve written</Link> or take a
            look at <Link to="/trips">my travel experiences</Link>
          </Text>
          <LinkWrapper>
            <TwitterLink
              aria-label="Twitter"
              href="https://twitter.com/ngnijland"
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
  );
}
