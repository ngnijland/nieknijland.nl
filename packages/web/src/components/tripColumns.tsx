import styled from "styled-components";

export const Total1 = styled.li`
  grid-column: 2 / -1;

  @media (min-width: 1200px) {
    grid-column: 2 / 6;
  }
`;

export const Total2 = styled.li`
  :nth-of-type(2) {
    grid-column: 2 / -1;
  }

  :nth-of-type(3) {
    grid-column: 1 / -1;
  }

  @media (min-width: 1200px) {
    :nth-of-type(2) {
      grid-column: 2 / 4;
    }

    :nth-of-type(3) {
      grid-column: 1 / 5;
      grid-row: 2;
    }
  }
`;

export const Total3 = styled.li`
  :nth-of-type(2) {
    grid-column: 2 / -1;
  }

  :nth-of-type(3) {
    grid-column: 1 / -1;
  }

  @media (min-width: 1200px) {
    :nth-of-type(2) {
      grid-column: 2 / 5;
    }

    :nth-of-type(3) {
      grid-column: 1 / 3;
      grid-row: 2;
    }

    :nth-of-type(4) {
      grid-column: 3 / 6;
      grid-row: 2;
    }
  }
`;

export const Total4 = styled.li`
  :nth-of-type(2) {
    grid-column: 2 / -1;
  }

  :nth-of-type(3) {
    grid-column: 1 / -1;
  }

  @media (min-width: 1200px) {
    :nth-of-type(2) {
      grid-column: 2 / 4;
    }

    :nth-of-type(3) {
      display: flex;
      grid-column: 4 / 6;
      align-items: flex-end;
    }

    :nth-of-type(4) {
      grid-column: 1 / 3;
      grid-row: 2;
    }

    :nth-of-type(5) {
      grid-column: 3 / 6;
      grid-row: 2;
    }
  }
`;
