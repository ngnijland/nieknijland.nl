import React from "react"
import styled from "styled-components"

import ArrowDownIcon from "../components/arrowDownIcon"

const Header = styled.header`
  position: relative;

  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  grid-column: span 1 / -1;
  grid-row: 1 / span 1;

  @media (min-width: 600px) {
    justify-content: flex-start;
  }

  @media (min-width: 725px) {
    align-items: center;
  }

  @media (min-width: 1000px) {
    justify-content: flex-end;
    grid-column: 1 / span 1;
  }

  @media (min-width: 1200px) {
    justify-content: flex-start;
    grid-column: 2 / span 1;
  }
`

const Title = styled.h1`
  padding: 0.5rem 0 0;
  margin: 0;

  font-size: 0.875rem;
  font-weight: normal;

  background-color: #fff;

  writing-mode: vertical-lr;

  @supports (writing-mode: sideways-lr) {
    writing-mode: sideways-lr;
  }

  ::after {
    content: "";

    position: absolute;
    top: -12.5rem;
    right: 0.5rem;

    display: block;
    width: 0.0625rem;
    height: 12.5rem;

    background-color: var(--text-color);
    background-image: linear-gradient(0deg, var(--text-color) 0%, #fff 100%);

    @supports (writing-mode: sideways-lr) {
      right: 0.4375rem;
    }

    @media (min-width: 600px) {
      right: auto;
      left: 0.5rem;

      @supports (writing-mode: sideways-lr) {
        left: 0.4375rem;
      }
    }

    @media (min-width: 1000px) {
      right: 0.5rem;
      left: auto;

      @supports (writing-mode: sideways-lr) {
        right: 0.4375rem;
      }
    }

    @media (min-width: 1200px) {
      right: auto;
      left: 0.5rem;

      @supports (writing-mode: sideways-lr) {
        left: 0.4375rem;
      }
    }
  }

  @media (min-width: 725px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-top: 2.25rem;

    ::before {
      content: "";

      position: absolute;
      top: 0;
      right: 0.5rem;
      bottom: 0.25rem;
      z-index: -1;

      display: block;
      width: 0.0625rem;
      background-color: var(--text-color);

      @supports (writing-mode: sideways-lr) {
        right: 0.4375rem;
      }

      @media (min-width: 600px) {
        right: auto;
        left: 0.5rem;

        @supports (writing-mode: sideways-lr) {
          left: 0.4375rem;
        }
      }

      @media (min-width: 1000px) {
        right: 0.5rem;
        left: auto;

        @supports (writing-mode: sideways-lr) {
          right: 0.4375rem;
        }
      }

      @media (min-width: 1200px) {
        right: auto;
        left: 0.5rem;

        @supports (writing-mode: sideways-lr) {
          left: 0.4375rem;
        }
      }
    }
  }
`

const Icon = styled(ArrowDownIcon)`
  position: absolute;
  top: -2rem;
  right: 1.25rem;

  width: 1rem;

  @media (min-width: 600px) {
    right: auto;
    left: 1.25rem;
  }

  @media (min-width: 1000px) {
    right: 1.25rem;
    left: auto;
  }

  @media (min-width: 1200px) {
    right: auto;
    left: -1.25rem;
  }
`

function ScrollDownIndicator(): JSX.Element {
  return (
    <Header>
      <Title>Something about me</Title>
      <Icon />
    </Header>
  )
}

export default ScrollDownIndicator
