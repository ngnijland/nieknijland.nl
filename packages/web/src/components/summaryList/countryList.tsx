import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Container, Title, TitleHighlight, List, Item } from "./styled";

export interface Country {
  code: string;
  name: string;
}

export interface CountryData {
  allSanityCountry: {
    nodes: Country[];
    totalCount: number;
  };
  allRandomSanityCountry: Country[];
}

export function CountryList(): JSX.Element {
  const {
    allRandomSanityCountry: countries,
    allSanityCountry: { totalCount },
  } = useStaticQuery<CountryData>(graphql`
    {
      allRandomSanityCountry {
        code
        name
      }
      allSanityCountry {
        totalCount
      }
    }
  `);

  return (
    <Container>
      <Title>
        {totalCount}
        <br />
        <TitleHighlight>Countries</TitleHighlight>
      </Title>
      <List>
        {countries.slice(0, 6).map(({ name }) => (
          <Item key={name}>{name}</Item>
        ))}
      </List>
    </Container>
  );
}
