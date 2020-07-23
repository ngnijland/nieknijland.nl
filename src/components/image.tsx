import React, { useEffect, useState } from "react"
import Img, { FluidObject } from "gatsby-image"
import styled from "styled-components"

import useWindowWidth from "../helpers/useWindowWidth"

export enum CaptionPosition {
  Top,
  Bottom,
}

export interface ImageProps {
  alt: string
  className?: string
  caption?: string
  captionPosition?: CaptionPosition
  fluid: FluidObject
}

const Figure = styled.figure`
  margin: 0;
`

const StyledImg = styled(Img)`
  border-radius: 1rem;
`

const Figcaption = styled.figcaption`
  padding: 0 1rem;

  font-size: 0.875rem;
  color: #b5b5b5;
  line-height: 1rem;
`

const FigcaptionTop = styled(Figcaption)`
  margin-top: 0.5rem;
  margin-bottom: 0.75rem;
`

const FigcaptionBottom = styled(Figcaption)`
  margin-top: 0.75rem;
  margin-bottom: 0.5rem;
`

function Image(props: ImageProps): JSX.Element {
  const {
    className,
    caption,
    captionPosition = CaptionPosition.Bottom,
    ...rest
  } = props
  const [position, setPosition] = useState(captionPosition)
  const width = useWindowWidth()

  useEffect(() => {
    if (captionPosition === CaptionPosition.Top && width) {
      if (width < 600) {
        setPosition(CaptionPosition.Bottom)
      } else {
        setPosition(CaptionPosition.Top)
      }
    }
  }, [captionPosition, width])

  return (
    <Figure className={className}>
      {caption && position === CaptionPosition.Top && (
        <FigcaptionTop>{caption}</FigcaptionTop>
      )}
      <StyledImg fadeIn={false} {...rest} />
      {caption && position === CaptionPosition.Bottom && (
        <FigcaptionBottom>{caption}</FigcaptionBottom>
      )}
    </Figure>
  )
}

export default Image
