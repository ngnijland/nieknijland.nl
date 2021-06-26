import React from "react";
import styled from "styled-components";

export interface PageTitleProps {
  title: string;
  subtitle?: string;
  lineText?: string;
}

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 1.5rem 0 0;

  font-size: clamp(1.5rem, 5vw, 2.625rem);
`;

export const Subtitle = styled.span`
  display: block;
  margin: 0.75rem 0 0;

  font-size: clamp(1.125rem, 3vw, 1.25rem);
  font-weight: normal;
  color: var(--text-color-highlight);
`;

export const LineText = styled.h2`
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

const Line = styled.div`
  width: 0.0625rem;
  height: 8rem;
  margin: 1rem 0 1rem 0.5rem;

  background-color: var(--text-color);

  @media (min-width: 1200px) {
    height: 10.5rem;
  }
`;

export function PageTitle({
  title,
  subtitle,
  lineText,
}: PageTitleProps): JSX.Element {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {lineText && <LineText>{lineText}</LineText>}
      {!lineText && <Line />}
    </TitleContainer>
  );
}
