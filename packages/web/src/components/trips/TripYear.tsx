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

const WrapperLayout = styled(HalfWidthLayout)`
  margin: 1rem 0;
`;

const YearHeader = styled.header`
  position: relative;

  grid-column: 1 / span 1;
  grid-row: 1 / span 1;

  @media (min-width: 1200px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }
`;

const YearTitle = styled.h2<{ sizes: SizesContext["sizes"] }>`
  height: 3rem;
  margin: 0;

  font-size: 1rem;
  font-weight: normal;
  text-align: center;
  writing-mode: vertical-lr;
  @supports (writing-mode: sideways-lr) {
    writing-mode: sideways-lr;
  }

  background-color: #fff;

  ${({ sizes }) =>
    sizes &&
    `transform: translateY(calc(${
      sizes.card - sizes.image + sizes.image / 2
    }px - 1.5rem));`}
`;

const Line = styled.div<{ sizes: SizesContext["sizes"] }>`
  position: absolute;
  top: 0;
  left: 0.4375rem;
  z-index: -1;

  ${({ sizes }) => sizes && `height: ${sizes.card}px;`}
  width: 0.0625rem;

  background-color: var(--text-color);

  @media (min-width: 1200px) {
    right: 0.5625rem;
    left: auto;
  }
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

  return (
    <WrapperLayout as="li">
      <YearHeader>
        <Line sizes={sizes} />
        <YearTitle sizes={sizes}>{year}</YearTitle>
      </YearHeader>
      <TripsLayout as="ol">
        {trips.map((trip, index) => {
          const TripColumn = TripColumns[`Total${trips.length}`];

          console.log({ tripNumber: index, tripsInYear: trips.length });

          return (
            <TripColumn key={trip.id}>
              <TripItem
                trip={trip}
                tripNumber={index}
                tripsInYear={trips.length}
              />
            </TripColumn>
          );
        })}
      </TripsLayout>
    </WrapperLayout>
  );
}
