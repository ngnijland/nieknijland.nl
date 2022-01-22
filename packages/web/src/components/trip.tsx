import React, { useEffect, useRef } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import { getImage } from "gatsby-plugin-image";

import { Image } from "./image";
import { Trip } from "../pages/trips";
import { useElementSizes } from "../contexts/elementSizes";

export interface TripProps {
  first?: boolean;
  trip: Trip;
}

const TripSummary = styled.div`
  padding: 0 1rem;
  margin: 0.375rem 0;
`;

const Title = styled.h3`
  margin: 0;

  font-size: 1rem;
`;

const Duration = styled.span`
  display: inline-block;
  margin-bottom: 0.125rem;

  font-size: 0.875rem;
  color: var(--text-color-highlight);
`;

function getElementHeight(node: HTMLElement): number {
  const styles = getComputedStyle(node);

  return (
    node.offsetHeight +
    parseInt(styles.marginTop, 10) +
    parseInt(styles.marginBottom, 10)
  );
}

export function TripItem({
  first,
  trip: {
    endDate,
    featuredImage: { asset, altText },
    startDate,
    title,
  },
}: TripProps) {
  const days = dayjs(endDate).diff(startDate, "day");
  const articleElement = useRef<HTMLElement>(null);
  const imageElement = useRef<HTMLElement>(null);
  const { setSizes } = useElementSizes();

  useEffect(() => {
    if (imageElement.current && articleElement.current && first) {
      setSizes({
        card: getElementHeight(articleElement.current),
        image: getElementHeight(imageElement.current),
      });

      window.addEventListener("resize", () => {
        if (imageElement.current && articleElement.current) {
          setSizes({
            card: getElementHeight(articleElement.current),
            image: getElementHeight(imageElement.current),
          });
        }
      });
    }
  }, []);

  // TODO: fix fade in colors images
  return (
    <article ref={articleElement}>
      <TripSummary>
        <Duration>{days + 1} days</Duration>
        <Title>{title}</Title>
      </TripSummary>
      <Image
        image={getImage(asset.gatsbyImageData)}
        alt={altText}
        ref={imageElement}
      />
    </article>
  );
}
