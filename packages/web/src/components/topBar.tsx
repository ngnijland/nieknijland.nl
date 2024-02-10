import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Tag from "./tag";

const Header = styled.header`
  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;
  height: 4rem;

  @media (min-width: 600px) {
    height: 6rem;
  }
`;

const NoStyleLink = styled(Link)`
  font-weight: normal;
  text-decoration: none;

  :visited,
  :focus,
  :active {
    color: var(--text-color);
  }
`;

const Title = styled.h1`
  margin: 0 1.125rem;

  font-size: clamp(1.5rem, 3.75vw, 2rem);

  @media (min-width: 600px) {
    margin-right: 2rem;
    margin-left: 2rem;
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0;
  margin: 0;

  list-style: none;
`;

const NavLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function TopBar(): JSX.Element {
  return (
    <Header>
      <NoStyleLink to="/">
        <Title>
          <Tag>&#60;</Tag>Niek<Tag>/&#62;</Tag>
        </Title>
      </NoStyleLink>
      <nav>
        <List>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/trips">Trips</NavLink>
          </li>
        </List>
      </nav>
    </Header>
  );
}

export default TopBar;
