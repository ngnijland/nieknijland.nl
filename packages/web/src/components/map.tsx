import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import mapboxgl from "mapbox-gl";

if (process.env.GATSBY_MAPBOX_ACCESS_TOKEN) {
  mapboxgl.accessToken = process.env.GATSBY_MAPBOX_ACCESS_TOKEN;
}

export interface MapProps {
  countryFilter?: string[];
}

const Root = styled.div`
  width: 100%;
  height: 100%;

  background-color: #eff0f0;
`;

function Map({ countryFilter }: MapProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const map = new mapboxgl.Map({
        center: [25, 34],
        container: ref.current,
        style: "mapbox://styles/nieknijland/ckgnvhm130gpq19nys1cyg7wn",
        zoom: 2,
      });

      map.on("load", function () {
        if (countryFilter) {
          map.addLayer(
            {
              id: "country-boundaries",
              source: {
                type: "vector",
                url: "mapbox://mapbox.country-boundaries-v1",
              },
              "source-layer": "country_boundaries",
              type: "fill",
              paint: {
                "fill-color": "#d2361e",
                "fill-opacity": 0.25,
              },
            },
            "country-label"
          );

          map.setFilter("country-boundaries", countryFilter);
        }
      });

      return () => map.remove();
    }
  }, [ref]);

  return <Root ref={ref} />;
}

export default Map;
