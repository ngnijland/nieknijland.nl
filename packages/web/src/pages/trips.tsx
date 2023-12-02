import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { PageProps, graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

import { HalfWidthLayout } from "../components/halfWidthLayout";
import Map from "../components/map";
import SEO from "../components/seo";
import TopBar from "../components/topBar";
import { PageTitle, Title } from "../components/pageTitle";
import {
  ContinentList,
  CountryList,
  PlaceList,
} from "../components/summaryList";
import { ImageHeightProvider } from "../contexts/elementSizes";
import { TripYear } from "../components/trips/TripYear";
import Footer from "../components/footer";

export interface Country {
  code: string;
  name: string;
}

export interface Trip {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  featuredImage: {
    asset: {
      gatsbyImageData: IGatsbyImageData;
    };
    altText: string;
  };
}

export interface TripsProps extends PageProps {
  data: {
    allSanityCountry: {
      nodes: Country[];
    };
    allSanityTrip: {
      nodes: Trip[];
    };
  };
}

const Main = styled.main`
  margin-bottom: 2rem;
`;

const MapWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: calc(50% + 0.5rem);

  display: none;

  @media (min-width: 600px) {
    display: block;
  }
`;

const HeaderWrapper = styled.div`
  height: calc(100vh - 4rem);
  min-height: 45rem;

  @media (min-width: 600px) {
    height: calc(100vh - 6rem);
    min-height: 50rem;
  }
`;

const Header = styled.header`
  max-width: 1640px;
  margin: 0 2rem;

  ${Title} {
    margin-top: 5.5rem;
  }

  @media (min-width: 600px) {
    top: -6rem;

    margin-right: 5rem;
    margin-left: 5rem;

    ${Title} {
      margin-top: 7.5rem;
    }
  }

  @media (min-width: 1200px) {
    margin-right: 8.75rem;
    margin-left: 8.75rem;
  }

  @media (min-width: 1920px) {
    margin-right: auto;
    margin-left: auto;
  }
`;

const Layout = styled(HalfWidthLayout)`
  grid-template-rows: 1fr min-content 1fr;
  height: 100%;
`;

const TripsSection = styled.section`
  max-width: 1640px;
  margin: 0 2rem;

  @media (min-width: 600px) {
    margin-right: 5rem;
    margin-left: 5rem;
  }

  @media (min-width: 1200px) {
    margin-right: 8.75rem;
    margin-left: 8.75rem;
  }

  @media (min-width: 1920px) {
    margin-right: auto;
    margin-left: auto;
  }
`;

const TripsList = styled.ol`
  padding: 0;
  margin: 0;

  list-style: none;

  li:last-of-type ol li:last-of-type {
    article {
      margin-bottom: 0;
    }
  }
`;

export const pageQuery = graphql`{
  allSanityCountry {
    nodes {
      code
    }
  }
  allSanityTrip(sort: {startDate: DESC}) {
    nodes {
      featuredImage {
        altText
        asset {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      startDate
      title
      id
      endDate
    }
  }
}`;

function Trips({ data }: TripsProps): JSX.Element {
  const tripsByYear = data.allSanityTrip.nodes.reduce<Record<string, Trip[]>>(
    (acc, trip) => {
      const year = new Date(trip.startDate).getFullYear().toString();

      return {
        ...acc,
        [year]: [...(acc[year] || []), trip],
      };
    },
    {}
  );

  return (
    <>
      <SEO title="Trips" />
      <Helmet>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Helmet>
      <TopBar />
      <Main>
        <HeaderWrapper>
          <Header>
            <Layout>
              <PageTitle title="Trips" lineText="Summary" />
              <ContinentList />
              <CountryList />
              <PlaceList />
            </Layout>
          </Header>
        </HeaderWrapper>
        <TripsSection>
          <TripsList>
            {Object.entries(tripsByYear)
              .sort(([a], [b]) => parseInt(b, 10) - parseInt(a, 10))
              .map(([year, trips], index) => (
                <ImageHeightProvider key={year}>
                  <TripYear trips={trips} year={year} first={index === 0} />
                </ImageHeightProvider>
              ))}
          </TripsList>
        </TripsSection>
      </Main>
      {Object.keys(tripsByYear).length !== 0 && (
        <HalfWidthLayout>
          <Footer title="Find me at:" />
        </HalfWidthLayout>
      )}
      <MapWrapper>
        <Map
          countryFilter={[
            "in",
            "iso_3166_1_alpha_3",
            ...data.allSanityCountry.nodes.map((node) => node.code),
          ]}
        />
      </MapWrapper>
    </>
  );
}

export default Trips;
