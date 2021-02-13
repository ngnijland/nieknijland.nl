import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Container, Title, TitleHighlight, List, Item } from "./styled";

export interface Place {
  name: string;
}

export interface PlaceData {
  allSanityPlace: {
    totalCount: number;
  };
  allRandomSanityPlace: Place[];
}

export function PlaceList(): JSX.Element {
  const {
    allRandomSanityPlace: places,
    allSanityPlace: { totalCount },
  } = useStaticQuery<PlaceData>(graphql`
    {
      allSanityPlace {
        totalCount
      }
      allRandomSanityPlace {
        name
      }
    }
  `);

  return (
    <Container>
      <Title>
        {totalCount}
        <br />
        <TitleHighlight>Places</TitleHighlight>
      </Title>
      <List>
        {places.slice(0, 6).map(({ name }) => (
          <Item key={name}>{name}</Item>
        ))}
      </List>
    </Container>
  );
}
