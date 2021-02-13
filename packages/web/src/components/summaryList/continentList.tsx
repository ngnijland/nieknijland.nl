import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Container, Title, TitleHighlight, List, Item } from "./styled";

export interface Continent {
  name: string;
}

export interface ContinentData {
  allSanityContinent: {
    nodes: Continent[];
    totalCount: number;
  };
}

export function ContinentList(): JSX.Element {
  const {
    allSanityContinent: { nodes: continents, totalCount },
  } = useStaticQuery<ContinentData>(graphql`
    {
      allSanityContinent {
        nodes {
          name
        }
        totalCount
      }
    }
  `);

  return (
    <Container>
      <Title>
        {totalCount}
        <br />
        <TitleHighlight>Continents</TitleHighlight>
      </Title>
      <List>
        {continents.slice(0, 6).map(({ name }) => (
          <Item key={name}>{name}</Item>
        ))}
      </List>
    </Container>
  );
}
