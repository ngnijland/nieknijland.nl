import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import styled, { css } from "styled-components";

export enum CaptionPosition {
  Top,
  Bottom,
}

export interface ImageProps {
  alt: string;
  aspectRatio?: [number, number];
  caption?: string;
  captionPosition?: CaptionPosition;
  className?: string;
  image: IGatsbyImageData | undefined;
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

export const Image = React.forwardRef(
  (
    props: ImageProps,
    ref: React.ForwardedRef<HTMLElement>
  ): JSX.Element | null => {
    const {
      alt,
      aspectRatio,
      className,
      caption,
      captionPosition = CaptionPosition.Bottom,
      image,
    } = props;

    if (typeof image === "undefined") {
      return null;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { backgroundColor, ...newImage } = image;

    return (
      <Figure className={className} ref={ref}>
        {caption && (
          <FigcaptionTop position={captionPosition}>{caption}</FigcaptionTop>
        )}
        {image && (
          <GatsbyImage
            alt={alt}
            backgroundColor="#eff0f0"
            imgStyle={{ borderRadius: "1rem" }}
            image={
              aspectRatio
                ? { ...newImage, width: aspectRatio[0], height: aspectRatio[1] }
                : newImage
            }
          />
        )}
        {caption && (
          <FigcaptionBottom position={captionPosition}>
            {caption}
          </FigcaptionBottom>
        )}
      </Figure>
    );
  }
);

Image.displayName = "Image";
