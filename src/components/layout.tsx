import React from "react"
import styled from "styled-components"

export interface LayoutProps {
  children: JSX.Element | JSX.Element[]
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, [col-start] 1fr);
  grid-gap: 0.625rem;
  margin: 0 2.25rem;

  > * {
    grid-column: col-start / span 4;
  }
`

function Layout({ children }: LayoutProps): JSX.Element {
  return <Grid>{children}</Grid>
}

export default Layout
