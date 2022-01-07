import styled from "styled-components";

export const HalfWidthLayout = styled.div`
  display: grid;
  grid-gap: 0.625rem;
  grid-template-columns: repeat(4, [col-start] 1fr);
  width: calc(50% - 0.3125rem);

  @media (min-width: 600px) {
    grid-gap: 1rem;
    width: calc(50% - 0.5rem);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(6, [col-start] 1fr);
  }

  > * {
    grid-column: col-start / -1;
  }
`;
