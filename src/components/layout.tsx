import React from "react"
import styled from "styled-components"

export interface LayoutProps {
  children: JSX.Element | JSX.Element[]
}

const Grid = styled.div`
  display: grid;
  grid-gap: 0 0.625rem;
  grid-template-columns: repeat(4, [col-start] 1fr);
  max-width: 1640px;
  margin: 0 2.25rem;

  @media (min-width: 600px) {
    grid-gap: 0 1rem;
    grid-template-columns: repeat(8, [col-start] 1fr);
    margin: 0 5rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(12, [col-start] 1fr);
    margin-right: 8.75rem;
    margin-left: 8.75rem;
  }

  @media (min-width: 1920px) {
    margin-right: auto;
    margin-left: auto;
  }

  > * {
    grid-column: col-start / -1;
  }
`

function Layout(props: LayoutProps): JSX.Element {
  const { children } = props
  return <Grid {...props}>{children}</Grid>
}

export default Layout
