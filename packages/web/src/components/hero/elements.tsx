import styled from "styled-components";

import Image from "../image";
import GridLayout from "../layout";

export const Header = styled.header`
  min-height: 100%;
`;

export const Layout = styled(GridLayout)`
  padding: 12vh 0;

  @media (min-width: 1000px) {
    align-items: center;
    padding: 25vh 0;
  }
`;

export const TitleWrapper = styled.div`
  @media (min-width: 1000px) {
    position: relative;
    top: 0.25rem;

    grid-column: 1 / span 5;
  }

  @media (min-width: 1200px) {
    grid-column: 1 / span 7;
  }
`;

export const Title = styled.h1`
  margin: 0;

  font-size: clamp(1.5rem, 3.75vw, 4.5rem);
`;

export const AvoidWrap = styled.span`
  display: block;
`;

export const Text = styled.p`
  margin: 1.75rem 0;

  font-size: clamp(1rem, 2vw, 1.5rem);

  @media (min-width: 1000px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export const LinkWrapper = styled.div`
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
`;

export const IconLink = styled.a`
  display: inline-block;
  width: 2.75rem;
  height: 2.75rem;

  box-sizing: border-box;

  @media (min-width: 600px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export const TwitterLink = styled(IconLink)`
  padding: 0.125rem;

  @media (min-width: 600px) {
    padding: 0;
    margin-right: 1rem;
  }
`;

export const GithubLink = styled(IconLink)`
  padding: 0.5625rem;

  @media (min-width: 600px) {
    padding: 0.5rem;
    margin-right: 1rem;
  }
`;

export const LinkedInLink = styled(IconLink)`
  padding: 0.6875rem;

  @media (min-width: 600px) {
    padding: 0.625rem;
  }
`;

export const StyledImage = styled(Image)`
  grid-column: 1 / span 3;

  @media (min-width: 1000px) {
    grid-column: span 3 / -1;
    grid-row: 1;
  }

  @media (min-width: 1200px) {
    grid-column: span 5 / -1;
  }
`;
