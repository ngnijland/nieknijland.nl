import React from "react";
import Img, { FluidObject } from "gatsby-image";
import styled, { css } from "styled-components";

export enum CaptionPosition {
  Top,
  Bottom,
}

export interface ImageProps {
  alt: string;
  caption?: string;
  captionPosition?: CaptionPosition;
  className?: string;
  fluid: FluidObject;
}

const Figure = styled.figure`
  margin: 0;

  .gatsby-image-wrapper {
    border-radius: 1rem;
  }
`;

const Figcaption = styled.figcaption<{ position: CaptionPosition }>`
  padding: 0 1rem;

  font-size: 0.875rem;
  color: var(--text-color-secondary);
  line-height: 1rem;
`;

const FigcaptionTop = styled(Figcaption)`
  display: none;
  margin-top: 0.5rem;
  margin-bottom: 0.75rem;

  ${({ position }) =>
    position === CaptionPosition.Top &&
    css`
      @media (min-width: 600px) {
        display: block;
      }
    `}
`;

const FigcaptionBottom = styled(Figcaption)`
  margin-top: 0.75rem;
  margin-bottom: 0.5rem;

  ${({ position }) =>
    position === CaptionPosition.Top &&
    css`
      @media (min-width: 600px) {
        display: none;
      }
    `}
`;

function Image(props: ImageProps): JSX.Element {
  const {
    className,
    caption,
    captionPosition = CaptionPosition.Bottom,
    ...rest
  } = props;

  return (
    <Figure className={className}>
      {caption && (
        <FigcaptionTop position={captionPosition}>{caption}</FigcaptionTop>
      )}
      <Img backgroundColor="#eff0f0" {...rest} />
      {caption && (
        <FigcaptionBottom position={captionPosition}>
          {caption}
        </FigcaptionBottom>
      )}
    </Figure>
  );
}

export default Image;
