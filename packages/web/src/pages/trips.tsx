import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import GridLayout from "../components/layout";
import Map from "../components/map";
import SEO from "../components/seo";
import TopBar from "../components/topBar";
import { useWindowSize } from "../hooks";

const MapWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 50%;
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

  @media (min-width: 600px) {
    top: -6rem;
  }
`;

const Layout = styled(GridLayout)`
  grid-template-rows: 1fr min-content 1fr;
  height: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// TODO: make reusable
const Title = styled.h1`
  margin: 5.5rem 0 0;

  font-size: clamp(1.5rem, 2.5vw, 2.625rem);

  @media (min-width: 600px) {
    margin-top: 7.5rem;
  }
`;

const SubTitle = styled.h2`
  display: flex;
  flex: 1;
  margin: 0;

  font-size: 1rem;
  font-weight: normal;

  writing-mode: vertical-lr;

  @supports (writing-mode: sideways-lr) {
    writing-mode: sideways-lr;
  }

  ::before,
  ::after {
    content: "";

    position: relative;
    left: 0.5rem;

    flex: 1;
    width: 0.0625rem;
    min-height: 0.75rem;

    background-color: var(--text-color);
  }

  ::before {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  ::after {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  @supports (writing-mode: sideways-lr) {
    ::before {
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }

    ::after {
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }
  }
`;

const SummaryContainer = styled.section`
  grid-row: 2 / 3;
  max-width: 100%;

  :nth-of-type(1) {
    grid-column: col-start / 3;
  }

  :nth-of-type(2) {
    grid-column: 3 / 5;
  }

  @media (min-width: 1200px) {
    :nth-of-type(1) {
      grid-column: col-start / 3;

      ul::after {
        display: none;
      }
    }

    :nth-of-type(2) {
      grid-column: 3 / 5;
    }

    :nth-of-type(3) {
      grid-column: 5 / 7;
    }
  }
`;

const SummaryTitle = styled.h1`
  margin: 0;

  font-size: clamp(1.5rem, 2.5vw, 2.625rem);
`;

const SummaryTitleHighlight = styled.span`
  display: inline-block;
  margin-top: 0.75rem;

  font-size: clamp(1.125rem, 1.5vw, 1.5rem);
  font-weight: normal;
  color: var(--text-color-highlight);

  @media (min-width: 1200px) {
    margin-top: 1rem;
  }
`;

const SummaryList = styled.ul`
  position: relative;

  padding: 0;
  margin: 0.75rem 0 0;

  list-style: none;

  @media (min-width: 1200px) {
    margin-top: 1rem;
  }

  ::after {
    content: "";

    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;

    height: 4rem;

    background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
  }
`;

const SummaryListItem = styled.li`
  margin-top: 0.5rem;

  font-weight: bold;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media (min-width: 1200px) {
    margin-top: 0.75rem;
  }
`;

function Trips(): JSX.Element {
  const { width } = useWindowSize();

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
              <TitleContainer>
                <Title>Trips</Title>
                <SubTitle>Summary</SubTitle>
              </TitleContainer>
              {width > 1200 && (
                <SummaryContainer>
                  <SummaryTitle>
                    4
                    <br />
                    <SummaryTitleHighlight>Continents</SummaryTitleHighlight>
                  </SummaryTitle>
                  <SummaryList>
                    <SummaryListItem>Europoe</SummaryListItem>
                    <SummaryListItem>Asia</SummaryListItem>
                    <SummaryListItem>Australia</SummaryListItem>
                    <SummaryListItem>North America</SummaryListItem>
                  </SummaryList>
                </SummaryContainer>
              )}
              <SummaryContainer>
                <SummaryTitle>
                  18
                  <br />
                  <SummaryTitleHighlight>Countries</SummaryTitleHighlight>
                </SummaryTitle>
                <SummaryList>
                  <SummaryListItem>France</SummaryListItem>
                  <SummaryListItem>Italia</SummaryListItem>
                  <SummaryListItem>Vietnam</SummaryListItem>
                  <SummaryListItem>Sweden</SummaryListItem>
                  <SummaryListItem>Portugal</SummaryListItem>
                  <SummaryListItem>Australia</SummaryListItem>
                </SummaryList>
              </SummaryContainer>
              <SummaryContainer>
                <SummaryTitle>
                  102
                  <br />
                  <SummaryTitleHighlight>Places</SummaryTitleHighlight>
                </SummaryTitle>
                <SummaryList>
                  <SummaryListItem>Rome</SummaryListItem>
                  <SummaryListItem>Paris</SummaryListItem>
                  <SummaryListItem>Miami</SummaryListItem>
                  <SummaryListItem>Hoi An</SummaryListItem>
                  <SummaryListItem>New York</SummaryListItem>
                  <SummaryListItem>San Fransisco</SummaryListItem>
                </SummaryList>
              </SummaryContainer>
            </Layout>
          </Header>
        </HeaderWrapper>
      </Main>
      {width > 600 && (
        <MapWrapper>
          <Map />
        </MapWrapper>
      )}
    </>
  );
}

export default Trips;
