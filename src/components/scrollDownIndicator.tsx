import React from "react"
import styled from "styled-components"

import ArrowDownIcon from "../components/arrowDownIcon"

{
  /* TODO: fix for viewport of 600px and up */
}

const Header = styled.header`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  grid-column: span 1 / -1;
  grid-row: 1 / span 1;
`

const Title = styled.h1`
  padding: 1rem 0;
   {
    /* TODO: presses content down on mobile viewport and doesn't vertically center
     * - Maybe no padding and before line on mobile?
    */
  }
  margin: 0 0 1.125rem;

  font-size: 0.875rem;
  font-weight: normal;
  color: #b5b5b5;

  background-color: #fff;

  writing-mode: vertical-lr;

  @supports (writing-mode: sideways-lr) {
    writing-mode: sideways-lr;
  }

  ::before,
  ::after {
    content: "";

    position: absolute;
     {
      /* TODO: should be different for different writing modes */
    }
    right: 0.4375rem;

    display: block;
    width: 0.0625rem;

    background-color: #707070;
  }

  ::before {
    top: 0;
    bottom: 2.25rem;
    z-index: -1;
  }

  ::after {
    top: -12.5rem;

    height: 12.5rem;

    background-image: linear-gradient(0deg, #707070 0%, #fff 100%);
  }
`

const Icon = styled(ArrowDownIcon)`
  position: absolute;
  top: -2rem;
  right: 1.25rem;

  width: 1rem;

  fill: #acacac;
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
