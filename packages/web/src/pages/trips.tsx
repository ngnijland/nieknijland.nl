import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { PageProps, graphql } from "gatsby";

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

export interface Country {
  code: string;
  name: string;
}

export interface TripsProps extends PageProps {
  data: {
    allSanityCountry: {
      nodes: Country[];
    };
  };
}

const MapWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 50%;

  display: none;

  @media (min-width: 600px) {
    display: block;
  }
`;

const Main = styled.main`
  height: calc(100% - 4rem);

  @media (min-width: 600px) {
    height: calc(100% - 6rem);
  }
`;

const HeaderWrapper = styled.div`
  position: relative;

  height: 100%;
`;
const Header = styled.header`
  position: absolute;
  top: -4rem;
  right: 0;
  bottom: 0;
  left: 0;

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

  list-style: none;
`;

const TripsLayout = styled(HalfWidthLayout)`
  width: 100%;
  padding: 0;
  margin: 0;

  list-style: none;
`;

export const pageQuery = graphql`
  {
    allSanityCountry(sort: { fields: name }) {
      nodes {
        code
      }
    }
  }
`;

function Trips({ data }: TripsProps): JSX.Element {
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
            <HalfWidthLayout as="li">
              <header>
                <h2>2021</h2>
              </header>
              <TripsLayout as="ol">
                <li>Trip 1</li>
                <li>Trip 2</li>
                <li>Trip 3</li>
              </TripsLayout>
            </HalfWidthLayout>
            <HalfWidthLayout as="li">
              <header>
                <h2>2020</h2>
              </header>
              <TripsLayout as="ol">
                <li>Trip 1</li>
                <li>Trip 2</li>
                <li>Trip 3</li>
              </TripsLayout>
            </HalfWidthLayout>
          </TripsList>
        </TripsSection>
      </Main>
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
