import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Image, { CaptionPosition } from "../components/image"
import Layout from "../components/layout"
import ScrollDownIndicator from "../components/scrollDownIndicator"

const HomeImage1 = styled(Image)`
  grid-column: 1 / span 3;

  @media (min-width: 600px) {
    grid-column: 4 / span 4;
  }

  @media (min-width: 1000px) {
    grid-column: 2 / span 4;
  }

  @media (min-width: 1200px) {
    grid-column: 3 / span 5;
  }
`

const HomeImage2 = styled(Image)`
  grid-column: 1 / span 4;

  @media (min-width: 600px) {
    grid-column: span 3 / -1;
  }

  @media (min-width: 1000px) {
    grid-column: 1 / span 3;
  }

  @media (min-width: 1200px) {
    grid-column: 1 / span 4;
  }
`

const HomeImage3 = styled(Image)`
  grid-column: 1 / span 4;

  @media (min-width: 600px) {
    grid-column: 2 / span 4;
    grid-row: 2;
  }

  @media (min-width: 1000px) {
    grid-column: 4 / span 4;
    grid-row: 2;
  }

  @media (min-width: 1200px) {
    grid-column: 5 / span 6;
    grid-row: 2;
  }
`

function PersonalImages(): JSX.Element {
  const data = useStaticQuery(graphql`
    query {
      homepageTravelImage1: file(
        relativePath: { eq: "homepage-travel-image-1.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      homepageTravelImage2: file(
        relativePath: { eq: "homepage-travel-image-2.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      homepageTravelImage3: file(
        relativePath: { eq: "homepage-travel-image-3.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout verticalGap>
      <ScrollDownIndicator />
      <HomeImage1
        alt="Rice fields between mountains"
        caption="Rice fields in Vietnam"
        captionPosition={CaptionPosition.Top}
        fluid={data.homepageTravelImage1.childImageSharp.fluid}
      />
      <HomeImage2
        alt="Me standing on a big rock"
        caption="Joshua Tree National Park, California"
        fluid={data.homepageTravelImage2.childImageSharp.fluid}
      />
      <HomeImage3
        alt="Brice Canyon hoodoos"
        caption="Bryce Canyon National Park, Utah"
        fluid={data.homepageTravelImage3.childImageSharp.fluid}
      />
    </Layout>
  )
}

export default PersonalImages
