import React from "react";
import styled from "styled-components";

import { HalfWidthLayout } from "../halfWidthLayout";
import { TripItem } from "../trip";
import * as TripColumns from "../tripColumns";
import ArrowDownIcon from "../arrowDownIcon";
import { Trip } from "../../pages/trips";
import { SizesContext, useElementSizes } from "../../contexts/elementSizes";

export interface TripYearProps {
  first: boolean;
  trips: Trip[];
  year: string;
}

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
  height: 3.25rem;
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
    }px - 1.625rem));`}

  @media (min-width: 725px) {
    height: 4.25rem;

    ${({ sizes }) =>
      sizes &&
      `transform: translateY(calc(${
        sizes.card - sizes.image + sizes.image / 2
      }px - 2.125rem));`}
  }
`;

const Line = styled.div<{ first: boolean; sizes: SizesContext["sizes"] }>`
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

  ${({ first }) =>
    first &&
    `
  ::after {
    content: "";

    position: absolute;
    top: -12.5rem;

    display: block;
    width: 0.0625rem;
    height: 12.5rem;

    background-color: var(--text-color);
    background-image: linear-gradient(0deg, var(--text-color) 0%, #fff 100%);
  }
  `}
`;

const TripsLayout = styled(HalfWidthLayout)`
  grid-row: 1 / span 1;
  width: 100%;
  padding: 0;
  margin: 0;

  list-style: none;

  li {
    :first-of-type {
      article {
        margin-top: 3rem;

        @media (min-width: 1200px) {
          margin-top: 12.5rem;
        }
      }
    }

    :last-of-type {
      article {
        margin-bottom: 1rem;
      }
    }
  }
`;

const Icon = styled(ArrowDownIcon)`
  position: absolute;
  top: -2rem;
  left: 1.25rem;

  width: 1rem;

  @media (min-width: 1200px) {
    right: -1.25rem;
    left: auto;
  }
`;

export function TripYear({ first, trips, year }: TripYearProps) {
  const { sizes } = useElementSizes();

  return (
    <HalfWidthLayout as="li">
      <YearHeader>
        {first && <Icon />}
        <Line first={first} sizes={sizes} />
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
    </HalfWidthLayout>
  );
}
