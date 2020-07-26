import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 4rem;

  @media (min-width: 600px) {
    height: 6rem;
  }
`

const NoStyleLink = styled(Link)`
  font-weight: normal;
  text-decoration: none;

  :visited,
  :focus,
  :active {
    color: var(--text-color);
  }
`

const Title = styled.h1`
  margin: 0 1rem;

  font-size: clamp(1.5rem, 3.75vw, 2rem);

  @media (min-width: 600px) {
    margin-right: 2rem;
    margin-left: 2rem;
  }
`

const Tag = styled.span`
  background-color: #8b9862;
  background-image: linear-gradient(
    90deg,
    #d12c1f ${(100 / 6) * 1}%,
    #f18f35 ${(100 / 6) * 1}%,
    #f18f35 ${(100 / 6) * 2}%,
    #fced4f ${(100 / 6) * 2}%,
    #fced4f ${(100 / 6) * 3}%,
    #367e33 ${(100 / 6) * 3}%,
    #367e33 ${(100 / 6) * 4}%,
    #1951f5 ${(100 / 6) * 4}%,
    #1951f5 ${(100 / 6) * 5}%,
    #6c1a84 ${(100 / 6) * 5}%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

function TopBar(): JSX.Element {
  return (
    <Header>
      <NoStyleLink to="/">
        <Title>
          <Tag>&#60;</Tag>Niek<Tag>/&#62;</Tag>
        </Title>
      </NoStyleLink>
    </Header>
  )
}

export default TopBar
