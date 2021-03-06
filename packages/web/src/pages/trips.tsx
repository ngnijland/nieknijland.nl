import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { PageProps, graphql } from "gatsby";

import GridLayout from "../components/layout";
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

  ${Title} {
    margin-top: 5.5rem;
  }

  @media (min-width: 600px) {
    top: -6rem;

    ${Title} {
      margin-top: 7.5rem;
    }
  }
`;

const Layout = styled(GridLayout)`
  grid-template-rows: 1fr min-content 1fr;
  height: 100%;
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
