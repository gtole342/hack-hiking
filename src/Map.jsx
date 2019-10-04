import React from "react";
import MapGL from "react-map-gl";

const token = "pk.eyJ1IjoiZ3RvbGUiLCJhIjoiY2p6b2Y4cGw4MDJlYTNtbm1zc3dpd3BnciJ9.ZR0TDB4dlK-kw5DHO4qM1w";

const Map = (props) => {
  const [viewport, setViewport] = React.useState({
    width: 800,
    height: 400,
    latitude:  props.latitude,
    longitude: props.longitude,
    zoom: 13,
  })

  const _onViewportChange = viewport => setViewport({...viewport, transitionDuration: 300 })

  return(
      <MapGL
        {...viewport}
        mapboxApiAccessToken={token}
        onViewportChange={_onViewportChange}
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
      />
  );

}

export default Map;
