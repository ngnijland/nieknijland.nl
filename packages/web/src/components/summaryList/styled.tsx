import styled from "styled-components";

export const Container = styled.section`
  grid-row: 2 / 3;
  max-width: 100%;

  :nth-of-type(1) {
    display: none;
  }

  :nth-of-type(2) {
    grid-column: col-start / 3;
  }

  :nth-of-type(3) {
    grid-column: 3 / 5;
  }

  @media (min-width: 1200px) {
    :nth-of-type(1) {
      display: block;
      grid-column: col-start / 3;

      ul::after {
        display: none;
      }
    }

    :nth-of-type(2) {
      grid-column: 3 / 5;
    }

    :nth-of-type(3) {
      grid-column: 5 / 7;
    }
  }
`;

export const Title = styled.h1`
  margin: 0;

  font-size: clamp(1.5rem, 2.5vw, 2.625rem);
`;

export const TitleHighlight = styled.span`
  display: inline-block;
  margin-top: 0.75rem;

  font-size: clamp(1.125rem, 1.5vw, 1.5rem);
  font-weight: normal;
  color: var(--text-color-highlight);

  @media (min-width: 1200px) {
    margin-top: 1rem;
  }
`;

export const List = styled.ul`
  position: relative;

  padding: 0;
  margin: 0.75rem 0 0;

  list-style: none;

  @media (min-width: 1200px) {
    margin-top: 1rem;
  }

  ::after {
    content: "";

    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;

    height: 4rem;

    background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
  }
`;

export const Item = styled.li`
  margin-top: 0.5rem;

  font-weight: bold;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media (min-width: 1200px) {
    margin-top: 0.75rem;
  }
`;
