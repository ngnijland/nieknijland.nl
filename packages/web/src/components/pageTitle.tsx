import React from "react";
import styled from "styled-components";

export interface PageTitleProps {
  title: string;
  subtitle: string;
}

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 1.5rem 0 0;

  font-size: clamp(1.5rem, 5vw, 2.625rem);
`;

export const SubTitle = styled.h2`
  display: flex;
  flex: 1;
  margin: 0;

  font-size: 1rem;
  font-weight: normal;

  writing-mode: vertical-lr;
  white-space: nowrap;

  @supports (writing-mode: sideways-lr) {
    writing-mode: sideways-lr;
  }

  ::before,
  ::after {
    content: "";

    position: relative;
    left: 0.5rem;

    flex: 1;
    width: 0.0625rem;
    min-height: 1.5rem;

    background-color: var(--text-color);

    @media (min-width: 1200px) {
      min-height: 3rem;
    }
  }

  ::before {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  ::after {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  @supports (writing-mode: sideways-lr) {
    ::before {
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }

    ::after {
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }
  }
`;

function PageTitle({ title, subtitle }: PageTitleProps): JSX.Element {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </TitleContainer>
  );
}

export default PageTitle;
