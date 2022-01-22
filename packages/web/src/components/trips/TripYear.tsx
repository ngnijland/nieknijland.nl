import React from "react";
import styled from "styled-components";

import { HalfWidthLayout } from "../halfWidthLayout";
import { TripItem } from "../trip";
import * as TripColumns from "../tripColumns";
import { Trip } from "../../pages/trips";
import { SizesContext, useElementSizes } from "../../contexts/elementSizes";

export interface TripYearProps {
  trips: Trip[];
  year: string;
}

const YearHeader = styled.header`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;

  @media (min-width: 1200px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }
`;

const YearTitle = styled.h2<{ sizes: SizesContext["sizes"] }>`
  position: relative;
  ${({ sizes }) =>
    sizes &&
    `top: calc(${sizes.card - sizes.image + sizes.image / 2}px - 1.5rem);`}

  height: 3rem;
  margin: 0;

  font-size: 1rem;
  font-weight: normal;
  text-align: center;
  writing-mode: sideways-lr;
`;

const TripsLayout = styled(HalfWidthLayout)`
  grid-row: 1 / span 1;
  width: 100%;
  padding: 0;
  margin: 0;

  list-style: none;
`;

export function TripYear({ trips, year }: TripYearProps) {
  const { sizes } = useElementSizes();

  console.log({ sizes });

  return (
    <HalfWidthLayout as="li">
      <YearHeader>
        <YearTitle sizes={sizes}>{year}</YearTitle>
      </YearHeader>
      <TripsLayout as="ol">
        {trips.map((trip, index) => {
          const TripColumn = TripColumns[`Total${trips.length}`];

          return (
            <TripColumn key={trip.id}>
              <TripItem trip={trip} first={index === 0} />
            </TripColumn>
          );
        })}
      </TripsLayout>
    </HalfWidthLayout>
  );
}
