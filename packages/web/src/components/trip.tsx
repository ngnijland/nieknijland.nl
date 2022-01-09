import React from "react";
import dayjs from "dayjs";
import styled from "styled-components";

import { Image } from "./image";
import { Trip } from "../pages/trips";

export interface TripProps {
  trip: Trip;
}

const Title = styled.h3`
  margin: 0 0 0.375rem;

  font-size: 1rem;
`;

const Duration = styled.span`
  display: inline-block;
  margin-bottom: 0.125rem;

  font-size: 0.875rem;
  color: var(--text-color-highlight);
`;

export function TripItem({
  trip: {
    endDate,
    featuredImage: { asset, altText },
    startDate,
    title,
  },
}: TripProps) {
  const days = dayjs(endDate).diff(startDate, "day");

  // TODO: fix fade in colors images
  return (
    <article>
      <Duration>{days + 1} days</Duration>
      <Title>{title}</Title>
      <Image image={asset.gatsbyImageData} alt={altText} />
    </article>
  );
}
