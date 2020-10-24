import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.GATSBY_MAPBOX_ACCESS_TOKEN;

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

function Map(): JSX.Element {
  const ref = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: ref.current,
      style: "mapbox://styles/nieknijland/ckgnvhm130gpq19nys1cyg7wn",
      center: [5, 34],
      zoom: 2,
    });

    return () => map.remove();
  }, []);

  return <Root ref={ref} />;
}

export default Map;
