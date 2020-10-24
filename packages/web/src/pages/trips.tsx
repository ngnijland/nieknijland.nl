import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import Map from "../components/map";
import SEO from "../components/seo";
import TopBar from "../components/topBar";

const MapWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 50%;
`;

function Trips(): JSX.Element {
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
      <Layout></Layout>
      <MapWrapper>
        <Map />
      </MapWrapper>
    </>
  );
}

export default Trips;
